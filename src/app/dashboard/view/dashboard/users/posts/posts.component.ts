import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DashboardPresenter } from '../../dashboard.presenter';
import { DialogPostComponent } from '../dialog-post/dialog-post.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Post } from 'src/app/core';

@Component({
  selector: 'posts-ui',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: [DashboardPresenter],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class PostsComponent implements OnInit {
  @Input() posts: Post[] = []
  @Input() userId: string = ""
  dataSource = this.posts;
  title: string = "";
  description: string = "";
  columnsToDisplay = ['id', 'title', 'body'];
  constructor(
    private presenter: DashboardPresenter,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogPostComponent, {
      width: '250px',
      data: {title: this.title, body: this.description},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const {title, body} = result;
        const post:Post = {
          title,
          body,
          userId: Number(this.userId)
        }

        this.presenter.addPost(post).subscribe(res => {
          if(res) {
            this.snackBar.open("Post created!");
          }
        })
      }
    });
  }
  
}
