import { Component, OnInit } from '@angular/core';
import { DashboardPresenter } from './dashboard.presenter';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardPresenter]
})
export class DashboardComponent implements OnInit {
  constructor(public presenter: DashboardPresenter) {}

  ngOnInit() {
  }
}