import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {
  username = "Chargement...";

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data) => {
      console.log(data);

    }, (err) => {
      console.log("oups");
    })


    this.getUserInfo();


  }


  getUserInfo() {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': "application/json",
        "authorization": localStorage.getItem('tech-token')
      })
    }

    this.http.get('http://localhost:8080/api/auth/info', httpOptions).subscribe((data: any) => {
      console.log(data);
      this.username = data.username;

    }, (err) => {
      console.log("oups");
    })
  }




  logout() {
    if (confirm('do you really wanna log out ?')) {
      localStorage.clear();
      this.router.navigateByUrl('/auth');
    }
  }


  goToTheGiftShop(err: boolean) {
    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        // todo

        if (err === true) {
          reject({ success: false, message: "oups" })
        } else {
          resolve({ succes: true, status: "baked" });
        }

      }, 6000);
    })

    return promise;
  }

}
