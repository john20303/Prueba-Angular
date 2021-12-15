import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User} from "../interfaces/User";

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  private Url = environment.baseUrl;

  constructor(private _http: HttpClient) {
  }

  getUser() {
    return this._http.get<User>(`${this.Url}`);
  }
}
