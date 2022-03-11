import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { CoreModule } from '../core';
import { PostsComponent } from './view/dashboard/users/posts/posts.component';
import { UsersComponent } from './view/dashboard/users/users.component';
import { DialogPostComponent } from './view/dashboard/users/dialog-post/dialog-post.component';


@NgModule({
  declarations: [
    PostsComponent,
    UsersComponent,
    DialogPostComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}