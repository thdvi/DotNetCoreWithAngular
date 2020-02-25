import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShowMenu: boolean = false;
  title = 'WebUI';
  showMenu($event){
    this.isShowMenu = $event;
  }
}
