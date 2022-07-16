import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  datosPerson = ['Weslin Antonio Rodríguez Silva', 18, 'León', 'León']
  constructor() { }
  ngOnInit(): void {
  }

}
