import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

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
    return await this.sendPostRequest("/auth/login", { email, password })
      .then((data) => {
        // console.log(data);
        return data;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }
}
