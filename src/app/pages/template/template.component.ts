import { PaisService } from './../../services/pais.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  usuario = {
    nombre:'Brigitte',
    apellido:'Padilla',
    correo:'brigitte@gmail.com',
    pais:'COL',
    genero:'F'
  }

  paises: any[] = [];

  constructor(private paisService:PaisService){}

  ngOnInit(): void {
    this.paisService.getPaises()
    .subscribe( paises => {
      this.paises = paises;
      console.log(this.paises);
      this.paises.unshift({
        nombre:'[Seleccione Pais]',
        codigo:''
      })
    })
  }

  guardar(forma:NgForm){
    console.log(forma);

    if(forma.invalid){

      Object.values(forma.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }
    console.log(forma.value);
  }


}
