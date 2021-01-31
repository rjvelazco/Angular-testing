import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: []
})
export class MedicoComponent implements OnInit {

  public medicos: any[] = [];

  constructor(
    private medicoService: MedicoService
  ) { }

  ngOnInit(): void {
  }

  saludarMedico(nombre: string) {
    return `Hola ${nombre}`;
  }

  
  obtenerMedicos() {
    return this.medicoService.getMedicos()
      .subscribe((medicos: any[]) => this.medicos = medicos);
  }

}
