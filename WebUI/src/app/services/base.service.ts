import { Injectable } from '@angular/core';
import { IService } from './iservice';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { empty, of } from 'rxjs';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap'

@Injectable()
export class BaseService<T> implements IService<T> {
    protected rootObject: string;
    protected  requestOptions = { withCredentials : true, headers: {} };

    constructor(protected http: HttpClient) {}

    /**
     * Takes in odata query parameters and then queries count of results
     * Then with count of results loops through with top and skip to
     * iteratively load the results set in groups [configured in environment file]
     * @param options - any odata options to be used in the query
     */
    getIterative(options: Array<string>): Observable<Array<T>> {
        const count = this.getCount(options.filter(x => x.startsWith('$filter=')));

        const results = count.flatMap((value: number) => {
            const queries: Array<Array<string>> = [];

            for (let i = 0; i < value;) {
                // Build query string values for iterative gets to api
                // copy original options to avoid altering them
                const queryOptions: Array<string> = options.slice();

                if (value >= environment.ServiceConfig.LargeIterationThreshold) {
                    queryOptions.push(`$top=${environment.ServiceConfig.LargeIterationQuantity}`);
                } else {
                    queryOptions.push(`$top=${environment.ServiceConfig.IterationQuantity}`);
                }

                queryOptions.push(`$skip=${i}`);
                queries.push(queryOptions);

                if (value >= environment.ServiceConfig.LargeIterationThreshold) {
                    i = i + environment.ServiceConfig.LargeIterationQuantity;
                } else {
                    i = i + environment.ServiceConfig.IterationQuantity;
                }

            }

            let observable;
            queries.forEach((options: Array<string>) => {
                if (observable === undefined) {
                    observable = this.http.get(
                        environment.ServiceConfig.ODataRootUrl + '/' + this.rootObject + this.buildfilter(options),
                        this.requestOptions);
                  } else {
                    observable = Observable.concat(observable, this.http.get(
                      environment.ServiceConfig.ODataRootUrl + '/' + this.rootObject + this.buildfilter(options),
                        this.requestOptions));
                  }
            });

            if (observable === undefined) {
              return of(empty);
            }

            return observable;
        });

        return results.map( data => data['value'] as Array<T>);
    }


    /**
     * Executes http get for odata paremters
     * @param options - any odata options to be used in the query
     */
    get(options: Array<string>): Observable<Array<T>> {
        const results = this.http.get(environment.ServiceConfig.ODataRootUrl + '/' + this.rootObject + this.buildfilter(options), this.requestOptions);
        return results.map(data => data['value'] as Array<T>);
    }

    /**
     * Querys Odata to provide a count of specified options
     * @param options - A collection of Odata options to be used in the query.
     * @returns {Observable<number>} - Count of objects
     */
    public getCount(options: Array<string>): Observable<number> {
        // Use local copy of array to not change original
        const localOptions = options.slice();

        if (localOptions.indexOf('$count') === -1) {
            localOptions.push('$count=true');
          }

        if (localOptions.indexOf('top') === -1) {
            localOptions.push('$top=0');
          }

        const results = this.http.get(environment.ServiceConfig.ODataRootUrl + '/' + this.rootObject + this.buildfilter(localOptions), this.requestOptions);
        return results.map(data => data['@odata.count']) as Observable<number>;
    }

    /**
     * Takes a collection of odata options and creates a query string for use in odata call
     * @param options - A collection of Odata options to be used in the query
     * @returns {string} - Query string of odata options
     */
    protected buildfilter(options: Array<string>) {
        if (options.length === 0) {
            return '';
        }

        let filter = '?';
        options.forEach((value: string, index: number) => {
            if (index > 0) {
                filter += '&';
              }

            filter +=  value;
        });

        return filter;
    }

    /**
     * Finds Odata object by Identifier
     * @param id - Identifier of Object to get
     * @param options - any odata options to be used in the query
     */
    getById(id: number, options: Array<string>): Observable<T> {
        const result = this.http.get(`${environment.ServiceConfig.ODataRootUrl}/${this.rootObject}(${id})${this.buildfilter(options)}`, this.requestOptions);
        return result.map(data => data as T);
    }

    /**
     * Adds new Odata object to DB
     * @param value - Odata object
     */
    add(value: T): Observable<T> {
        const result = this.http.post(`${environment.ServiceConfig.ODataRootUrl}/${this.rootObject}`, value, this.requestOptions);
        return result.map(data => data as T);
    }

    /**
     * Updates Odata object in DB
     * @param id - Identifier of the object to update
     * @param value - Odata object
     */
    update(id: number, value: T): Observable<T> {
        const result = this.http.put(`${environment.ServiceConfig.ODataRootUrl}/${this.rootObject}(${id})`, value, this.requestOptions);
        return result.map(data => data as T);
    }

    /**
     * Delets Odata object in DB
     * @param id - Identifier of the object
     */
    delete(id: number): void {
        throw new Error('Not Implemented');
    }
}
