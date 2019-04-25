import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,public authService:AuthService) { }

  ngOnInit() {
  }

  get localStorage(){return localStorage;}
  get auth(){return this.authService}

  logout(){
    this.authService.isLoggedIn=false;
    localStorage.setItem('isLoggedIn','false');
    this.router.navigateByUrl('/login');
  }
  

}
