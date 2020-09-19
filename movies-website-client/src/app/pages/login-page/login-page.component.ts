import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../../services/movies.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  email;
  password;
  error;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
  }

  login(data) {
    if (!data.email || !data.password) {
      this.error = "Please enter all valid information!";
      return;
    } else {
      this.error = null;
    }
    this.email = data.email;
    this.password = data.password;

    // console.log("Login", this.email, this.password);

    this.moviesService.logIn(this.email, this.password).then(data => {
      console.log(data);
    }).catch(err => {
      console.log(err);
    });
  }
}
