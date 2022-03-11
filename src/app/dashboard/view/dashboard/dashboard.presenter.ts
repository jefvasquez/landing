import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DashboardService, Post, User } from "src/app/core";

@Injectable()
export class DashboardPresenter {
    constructor(
        private DashboardService: DashboardService,
    ) {}

    getUsers(): Observable<User[]> {
        return this.DashboardService.getUsers();
    }
    
    getPosts(): Observable<Post[]> {
        return this.DashboardService.getPosts();
    }
    
    addPost(post: Post) {
        return this.DashboardService.createPost(post);
    }
}