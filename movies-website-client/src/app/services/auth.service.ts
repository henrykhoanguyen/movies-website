import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isLoggedIn: Observable<boolean>;
  public redirectUrl: string;

  constructor(private http: HttpClient, private router: Router) {
    console.log("Auth service initialized...");
  }

  private sendPostRequest(endpoint: string, body): Promise<any> {
    console.log(environment.expressBaseUrl + endpoint);

    // this.http.post(environment.expressBaseUrl + endpoint, body).subscribe(res => {
    //   // console.log(res);
    // });

    return Promise.resolve(
      this.http.post(environment.expressBaseUrl + endpoint, body).toPromise()
    );
  }

  async logIn(email: string, password: string): Promise<any> {
    const body = { email, password };
    return await this.sendPostRequest("/auth/login", body)
      .then((data) => {
        this.isLoggedIn = data.success;
        console.log(data, this.redirectUrl, this.isLoggedIn);

        if (this.redirectUrl) {
          this.router.navigate([this.redirectUrl]);
          this.redirectUrl = null;
        }
        return data;
      })
      .catch((err) => {
        // console.log(err);
        return err;
      });
  }

  async logOut(): Promise<any> {
    return await this.http.get(environment.expressBaseUrl + "/auth/logout")
      .toPromise()
      .then(data => {
        console.log(data);
        // this.isLoggedIn = data;
      });
  }
}
