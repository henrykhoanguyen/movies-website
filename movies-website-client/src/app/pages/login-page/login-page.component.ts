import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  email;
  password;
  error;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem("token")) {
      this.router.navigate([this.authService.redirectUrl || "\index"]);
    }
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

    this.authService.logIn(this.email, this.password).then(data => {
      // console.log(data);
      if (!data.success) {
        throw data.error;
      }
    }).catch(err => {
      console.log(err);
      this.error = err.error;
    });
  }
}
