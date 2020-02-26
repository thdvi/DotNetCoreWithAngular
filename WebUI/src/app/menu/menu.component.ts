import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IMenu } from '../models/imenu';
import { IFlatNode } from '../models/iflatnode';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

@Output() showMenu = new EventEmitter<boolean>();

TREE_DATA: IMenu[] = [{
 name: 'Product',
 children: [
   {name: 'T_Shirt'},
   {name: 'Hoodie'},
   {name: 'Jeans'}
 ] 
}];
private _transformer = (node: IMenu, level: number) => {
  return {
    expandable: !!node.children && node.children.length > 0,
    name: node.name,
    level: level,
  };
}
treeControl = new FlatTreeControl<IFlatNode>(
  node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = this.TREE_DATA;
   }
   hasChild = (_: number, node: IFlatNode) => node.expandable;

  ngOnInit(): void {
  }

  changeRoute(){
    this.showMenu.emit(false);
  }

}
