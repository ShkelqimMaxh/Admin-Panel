import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.authService.register(this.email, this.password).then(res => {
      alert('Uve been registered');
      this.router.navigate(['/']);
    }).catch(error => {
      // @ts-ignore
      alertify.error('Please fill out the form correctly');
    });
  }
}
