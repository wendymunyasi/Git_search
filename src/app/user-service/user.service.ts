import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private username: string;
  private clientid = '471dc5a63a45103713a4';
  private clientsecret = 'e6f34df231761054ce6976a22d07434a1b64d342';

  constructor(private http: HttpClient) {
    console.log("service is running");
    this.username = 'wendymunyasi';

  }

  getProfileInfo() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
      // .pipe(map((res: Response)=>res.json()));
  }

  updateUser(username:string) {
    this.username = username;
  }
}
