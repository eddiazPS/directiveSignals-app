import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './produc-page.component.html',
  styleUrl: './produc-page.component.css'
})
export class ProducPageComponent {
// constructor (private fb: FormBuilder){}
  private fb = inject (FormBuilder);

  public color : string = 'green';


  public myForm : FormGroup = this.fb.group({
    name: ['',[Validators.required, Validators.minLength(6),Validators.email] ]
  });

  changeColor (){
    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }


}
