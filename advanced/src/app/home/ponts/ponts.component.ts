import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ponts',
  templateUrl: './ponts.component.html',
  styleUrls: ['./ponts.component.css']
})
export class PontsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    if (confirm('do you really wanna log out ?')) {
      localStorage.clear();
      this.router.navigateByUrl('/auth');
    }
  }

}
