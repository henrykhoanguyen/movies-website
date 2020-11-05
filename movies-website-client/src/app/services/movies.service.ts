import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  private opts = {
    headers: {
      authorization: "Bearer " + sessionStorage.getItem("token"),
    },
  };

  constructor(private http: HttpClient) {
    console.log("Movies service initiated...");
  }

  private sendGetRequest(endpoint: string): Promise<any> {
    console.log(environment.expressBaseUrl + endpoint);
    // this.http.get(environment.expressBaseUrl + endpoint).subscribe(res => {
    //   console.log(res);
    // });

    return Promise.resolve(
      this.http
        .get(environment.expressBaseUrl + endpoint, this.opts)
        .toPromise()
    );
  }

  private sendPostRequest(endpoint: string, body): Promise<any> {
    console.log(environment.expressBaseUrl + endpoint);

    // this.http.post(environment.expressBaseUrl + endpoint, body).subscribe(res => {
    //   // console.log(res);
    // });

    return Promise.resolve(
      this.http
        .post(environment.expressBaseUrl + endpoint, this.opts, body)
        .toPromise()
    );
  }

  async getRecentMovies(query: string) {
    return await this.sendGetRequest(`/movies${query}`).then((data) => {
      // console.log(data);
      return data;
    });
  }

  getGenres = async () => {
    return await this.sendGetRequest("/movies/genres").then((genres) => {
      // console.log(genres);
      return genres;
    });
  }

  getMoviesFromGenre = async (genre) => {
    return await this.sendGetRequest(`/movies/`).then((movies) => {
      console.log(movies);
    });
  }
}
