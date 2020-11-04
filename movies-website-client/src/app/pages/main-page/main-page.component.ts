import { Component, OnInit } from '@angular/core';
// Services
import { AuthService } from 'src/app/services/auth.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  movieData = null;
  isLoggedIn = this.authService.isLoggedIn();

  constructor(private moviesService: MoviesService, private authService: AuthService) {
  }

  ngOnInit() {

    // TODO: fix pagination! one request with 9 items and only display 3
    this.moviesService.getRecentMovies('?limit=9').then(data => {
      this.movieData = data.data;
    });

  }
}
