import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router){}
  title = 'chartntable';
  public onClick() {
    this.router.navigate(["./chart"]);
  }

  public onTable() {
    this.router.navigate(["./table"]);
  }
}
