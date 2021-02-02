import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

// Testing
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkWithHref } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de tener un link a la pagina de medico', () => {
    
    const debugElements = fixture.debugElement.queryAll(By.directive( RouterLinkWithHref ));

    // console.log(debugElements);

    let existe = false;
    for(const elem of debugElements){
      
      if (elem.attributes.routerLink === '/medico') {
        existe = true;
        break;
      }
    };
    expect(existe).toBeTruthy(existe);

  });
});
