import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.getAuth().subscribe(auth => {
      if (auth){
        this.router.navigate(['/']);
      }
    });
  }
  onSubmit(){
    this.authService.login(this.email, this.password).then(res => {
      this.router.navigate(['/']);
    }).catch(err => {
      // @ts-ignore
      alertify.error('Wrong credentials');
    });
  }
}
