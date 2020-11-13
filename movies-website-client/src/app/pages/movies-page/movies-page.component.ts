import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
// Services
import { MoviesService } from "src/app/services/movies.service";

@Component({
  selector: "app-movies-page",
  templateUrl: "./movies-page.component.html",
  styleUrls: ["./movies-page.component.scss"],
})
export class MoviesPageComponent implements OnInit {
  movies = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((data) => {
      console.log(data);
      if (data.genreId) {
        this.getMoviesByGenre(data.genreId);
      }
      if (data.search) {
        this.getMovies(data);
      }
    });
  }

  private getMoviesByGenre(id) {
    this.moviesService.getMoviesFromGenre(id).then((movies) => {
      console.log(movies);
      this.movies = movies.data;
    });
  }

  private getMovies(data) {
    this.moviesService.getMovies(data).then(movies => {
      console.log(movies);
      this.movies = movies.data;
    });
  }
}
