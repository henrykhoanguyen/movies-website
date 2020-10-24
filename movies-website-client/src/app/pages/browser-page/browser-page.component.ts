import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-browser-page',
  templateUrl: './browser-page.component.html',
  styleUrls: ['./browser-page.component.scss']
})
export class BrowserPageComponent implements OnInit {

  constructor(private moviesService: MoviesService, private authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logOut();
  }

}
