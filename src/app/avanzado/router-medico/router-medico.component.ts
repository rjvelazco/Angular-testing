import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-router-medico',
  templateUrl: './router-medico.component.html',
  styles: [
  ]
})
export class RouterMedicoComponent implements OnInit {

  public id: string;
  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .subscribe((params: any) => {
        this.id = params['id']; // nuevo
      });

  }

  guardarMedico() {
    this.router.navigate(['medico', '123']);
  }

}
