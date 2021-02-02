import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

// Testis
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

// Directivas
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';

// Componentes
// import { NavbarComponent } from './avanzado/navbar/navbar.component';

describe('AppComponent', () => {
  
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        // NavbarComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('Debe existe el router-outlet', () => {

    const debugElement = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(debugElement).not.toBeNull();

  });

  
});
