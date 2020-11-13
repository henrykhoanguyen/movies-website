import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isLoggedIn = this.authService.isLoggedIn();
  currentURL = this.router.url;
  search = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    console.log(this.currentURL);
  }

  logout() {
    this.authService.logOut();
  }

  onSubmit(data){
    // console.log(data);
    if (data.title) {
      this.router.navigate(['/movies'], {queryParams: {search: true, title: data.title}});
    }
  }

}
