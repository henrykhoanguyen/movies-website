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
    // this.http.get(environment.expressBaseUrl + endpoint).subscribe(res => {
    //   console.log(res);
    // });

    return Promise.resolve(
      this.http.get(environment.expressBaseUrl + endpoint).toPromise()
    );
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

  async getRecentMovies(query: string) {
    return await this.sendGetRequest(`/movies${query}`).then(data => {
      // console.log(data);
      return data;
    });
  }

  async getGenres() {
    return await this.sendGetRequest(`/genres`).then(genres => {
      return genres;
    });
  }
}
