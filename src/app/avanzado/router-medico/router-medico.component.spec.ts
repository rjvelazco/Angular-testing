import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';

import { RouterMedicoComponent } from './router-medico.component';
import { Observable, of, Subject, from } from 'rxjs';

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;


  class FakeRouter{
    navigate(params) {}
  }

  class FakeActivatedRoute{
    // params: Observable<any> = of({});

    private subject = new Subject();

    push(value) {
      this.subject.next(value);
    }

    get params() {
      return this.subject.asObservable();
    }

  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        RouterMedicoComponent
      ],
      providers: [
        { provide: Router, useClass: FakeRouter },
        {
          provide: ActivatedRoute,
          // useClass: FakeActivatedRoute,
          useValue: { 
            params: from([{ id: 'nuevo' }])
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de redireccionar a Medico cuando se guarda', () => {

    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');

    component.guardarMedico();

    console.log(spy);

    expect(spy).toHaveBeenCalledWith(['medico', '123']);

  });

  it('Debe de colocar el id = nuevo', () => {
  
    component = fixture.componentInstance;

    // Injectamos la Clase al TestBed
    const activatedRoute  = TestBed.inject(ActivatedRoute);

    // activatedRoute.push({ id: 'nuevo' });

    expect(component.id).toBe('nuevo');


  });

});
