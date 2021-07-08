import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  register = new FormGroup({
    name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required),
    cindId: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required)
  })


  connect() {

    const name = this.register.value.name;
    const username = this.register.value.username;
    const email = this.register.value.email;
    const password = this.register.value.password;
    const cindId = this.register.value.cinId;
    const role = this.register.value.role;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    this.http.post('http://localhost:8080/api/auth/signup', {
      "name": name,
      "username": username,
      "email": email,
      "password": password,
      "cindIn": cindId,
      "role": role
    }, httpOptions).subscribe((res: any) => {
      console.log(res);


      this.router.navigateByUrl('/auth');


    }, (err) => {
      console.log(err.status);
      if (err.status === 401) {
        alert("wrong ")
      }
    })


  }
}
