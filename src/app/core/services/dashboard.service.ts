import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, combineLatest, Observable, of, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { Params } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Post } from '..';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private users = environment.api + '/users';
  private posts = environment.api + '/posts';
  
  constructor(
    private http: HttpClient
  ) {}

  getUsers() {
    return this.get(this.users);
  }
  
  getPosts() {
    return this.get(this.posts);
  }
  createPost(post: Post) {
    return this.post(this.posts, post);
  }

  /* async getDelivery(destination: string, travelId: number): Promise<Delivery> {
    const nombre = destination.replace(/@.*$/, '');
    const params = {
      'destination-number': nombre,
      'travel-id': travelId,
    };
    let travelResponse: Delivery;
    this.progressbarService.show();
    if (!environment.mock) {
      await this.apiService
        .get(this.apiService.delivery, params)
        .toPromise()
        .then(res => (travelResponse = res))
        .catch(error => {
          this.progressbarService.hide();
          throw error;
        });
    } else {
      travelResponse = await this.apiService
        .get(this.apiService.delivery)
        .toPromise();
    }
    this.progressbarService.hide();
    return travelResponse[0];
  }  */ 

  public formatErrors(error: HttpErrorResponse) {
    const messageError = error.error ? error.error : error;
    return throwError(messageError);
  }

  get(path: string, params?: any): Observable<any> {
    return this.http.get(path, { params }).pipe(
      catchError(error => {
        return this.formatErrors(error);
      })
    );
  }

  put(path: string, body = {}, options = {}): Observable<any> {
    return this.http.put(path, JSON.stringify(body), options).pipe(
      catchError(error => {
        return this.formatErrors(error);
      })
    );
  }

  patch(path: string, body = {}): Observable<any> {
    return this.http.patch(path, JSON.stringify(body)).pipe(
      catchError(error => {
        return this.formatErrors(error);
      })
    );
  }

  post(path: string, body = {}): Observable<any> {
    return this.http.post(path, JSON.stringify(body)).pipe(
      catchError(error => {
        return this.formatErrors(error);
      })
    );
  }

  delete(path: string, options = {}): Observable<any> {
    return this.http.delete(path, options).pipe(
      catchError(error => {
        return this.formatErrors(error);
      })
    );
  }

  jsonp(path: string, callback = 'callback'): Observable<any> {
    return this.http.jsonp(path, callback).pipe(
      catchError(error => {
        return this.formatErrors(error);
      })
    );
  }
}