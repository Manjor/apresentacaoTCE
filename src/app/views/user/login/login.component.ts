import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../shared/service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private router: Router, public userService: UserService) { }


  ngOnInit(): void {
  }


  public login(): void{
    this.userService.login(this.userForm.value).subscribe(res =>
    {
      localStorage.setItem('userData', JSON.stringify(res));
      this.router.navigate(['']);
    });
  }
}
