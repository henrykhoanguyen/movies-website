import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  movieData;
  pagination;

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit() {

    // TODO: fix pagination! one request with 9 items and only display 3
    this.moviesService.getRecentMovies('?limit=9').then(data => {
      this.movieData = data.data;
    });

  }

}
