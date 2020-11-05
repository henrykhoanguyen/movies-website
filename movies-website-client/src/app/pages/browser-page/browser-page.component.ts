import { Component, OnInit } from '@angular/core';
// Services
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-browser-page',
  templateUrl: './browser-page.component.html',
  styleUrls: ['./browser-page.component.scss']
})
export class BrowserPageComponent implements OnInit {
  genres = null;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getGenres().then(data => {
      console.log(data.data);
      this.genres = data.data;
    });
  }

  getMoviesFromGenre(id) {
    console.log(id);
  }

}
