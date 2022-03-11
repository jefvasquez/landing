import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Post, User } from 'src/app/core';
import { DashboardPresenter } from '../dashboard.presenter';

@Component({
  selector: 'users-ui',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [DashboardPresenter],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  posts: Post[] = [];
  dataSource = this.onLoadUsers();
  columnsToDisplay = ['name', 'username', 'address', 'email', 'phone', 'posts'];
  expandedElement: Post | null | undefined;

  constructor(
    private presenter: DashboardPresenter
  ) { }

  ngOnInit(): void {
    this.onLoadPosts()
  }

  onLoadUsers() {
    this.presenter.getUsers().subscribe(users => {
      this.users  = users
    })
  }

  onLoadPosts() {
    this.presenter.getPosts().subscribe(posts => {
      this.posts  = posts
    })
  }

  filterPosts(userId: string) {
    return this.posts.filter(post => post.userId === Number(userId))
  }

}
