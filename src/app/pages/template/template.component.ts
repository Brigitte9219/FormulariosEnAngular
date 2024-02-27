import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  usuario = {
    nombre:''
  }

  guardar(forma:NgForm){
    console.log(forma);
    console.log(forma.value);
  }


}
