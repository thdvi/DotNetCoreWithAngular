import { Observable } from 'rxjs';

export interface IService<T> {

    get(options: Array<string>): Observable<Array<T>>;

    getById(id: number, options: Array<string>): Observable<T>;

    add(T): Observable<T>;

    update(id: number, value: T): Observable<T>;

    delete(id: number);
}
