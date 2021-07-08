import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FomationService } from '../fomation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {



  prodAddForm = new FormGroup({
    nom: new FormControl('', Validators.required),
    formateur: new FormControl('', Validators.required),
    technologie: new FormControl('', Validators.required)
  })

  constructor(private http: HttpClient, private formService: FomationService) { }

  ngOnInit(): void {

  }

  back() {
    window.history.back();
  }

  saveFormation() {

    const body = this.prodAddForm.value;

    this.formService.addNewFormation(body).subscribe((data: any) => {
      if (data.success) {
        this.back();
      }

    })
  }


}
