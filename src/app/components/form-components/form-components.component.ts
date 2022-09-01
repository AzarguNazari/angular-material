import { Component, OnInit } from '@angular/core';
import {MatSliderChange} from "@angular/material/slider";

@Component({
  selector: 'app-form-components',
  templateUrl: './form-components.component.html',
  styleUrls: ['./form-components.component.css']
})
export class FormComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  check(sliderValue: MatSliderChange){
    console.log(sliderValue.value);
  }

}
