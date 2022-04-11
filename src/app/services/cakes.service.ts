import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cake } from '../model/cake.model';
import { User } from '../model/user.model';
import { Message } from '../model/message.model';

const baseUrl = "http://localhost:3000/api"
const baseCakes = baseUrl + "/cakes"
const baseIngredients = baseUrl + "/ingredients"
const baseUser = baseUrl + "/user"

@Injectable({
  providedIn: 'root'
})
export class CakesService {

  count: number = 0;

  constructor(private http: HttpClient) {
  }

  getAllIngredients(): Observable<String[]> {
    return this.http.get(baseIngredients).pipe(map((elem: any) => {
      return elem;
    }));
  }

  getAllCakes(params: any): Observable<Cake[]> {

    let queryParams: any = {};

    if (params) {
      queryParams = {
        params: new HttpParams()
          .set("pageSize", params.pageSize && params.pageSize.toString() || "")
          .set("page", params.page && params.page.toString() || "")
          .set("filter", params.filter && JSON.stringify(params.filter) || "")
      }
    }

    return this.http.get(baseCakes, queryParams).pipe(map((elem: any) => {
      return elem && elem.map((elem2: any) => new Cake(elem2)) || [];
    }));
  }

  getCake(id: number): Observable<Cake> {
    return this.http.get(`${baseCakes}/${id}`).pipe(map((elem: any) => {
      return elem;
    }));
  }

  getUser(id: number): Observable<User> {
    return this.http.get(`${baseUser}/${id}`).pipe(map((elem: any) => {
      return elem;
    }));
  }

  addMessage(newMessage: Message): Observable<Message> {
    return this.http.post(`${baseUrl}/contact`, newMessage)
      .pipe(map((jsonResponse: any) => new Message(jsonResponse)));
  }

  updateUser(user: User): Observable<User> {
    return this.http.put(`${baseUser}/${user._id}`, user).pipe(map(elem => { return new User(elem) }));
  }

}
