import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) {
    console.log('Movies service initiated...');
  }

  private sendGetRequest(endpoint: string): Promise<any> {
    console.log(environment.expressBaseUrl + endpoint);
    this.http.get(environment.expressBaseUrl + endpoint).subscribe(res => {
      console.log(res);
    });

    return Promise.resolve(
      this.http.get(environment.expressBaseUrl + endpoint).toPromise()
    );
  }

  private sendPostRequest(endpoint: string, body): Promise<any> {
    this.http.post(environment.expressBaseUrl + endpoint, body).subscribe(res => {});

    return Promise.resolve(
      this.http.post(environment.expressBaseUrl + endpoint, body).toPromise()
    );
  }

  async logIn(): Promise<any> {
    await this.sendPostRequest("/login", { emai: "a@email.com", password: "a1"}).then(data => {
      console.log(data);
    });
  }

  async getRecentMovies(query: string) {
    return await this.sendGetRequest(`/movies${query}`).then(data => {
      // console.log(data);
      return data;
    });
  }
}
