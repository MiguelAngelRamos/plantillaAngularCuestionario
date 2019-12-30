import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  public pregunta:string = "¿Cuál es la Capital de Chile?"
  respuestaCorrecta:boolean;
  respuestaSeleccionada:boolean;

  respuestas = [
    {
      cuidad: 'Arica',
      resp: false
    },
    {
      cuidad: 'Concepción',
      resp: false
    },
    {
      cuidad: 'Iquique',
      resp: false
    },
    {
      cuidad: 'Santiago',
      resp: true
    }
  ]

  constructor() {
    this.respuestaCorrecta = false;
    this.respuestaSeleccionada = false;
   }

  ngOnInit() {
  }

  comprobar(forma:NgForm){
    // console.log('forma', forma.value.customRadio.resp);
    this.respuestaCorrecta = forma.value.customRadio.resp;
    this.respuestaSeleccionada = true;
  }

  limpiar(){
    this.respuestaCorrecta = false;
    this.respuestaSeleccionada = false;
  }
}
