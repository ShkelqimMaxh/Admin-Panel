import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {Task} from '../../models/Task';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogged: boolean;
  activeUser: string;
  showRegister: string;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.getAuth().subscribe(auth => {
      if (auth){
        this.isLogged = true;
        this.activeUser = auth.email;
      }
      else {
        this.isLogged = false;
      }
    });
    }
  signOut(){
    this.authService.logout();
    this.isLogged = false;
    this.activeUser = null;

  }
}
