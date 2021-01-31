import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [IncrementadorComponent],
            imports: [FormsModule]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Debe iniciar el IncrementadorComponent', () => {
        expect(component).toBeTruthy();
    });

    it('Debe de mostrar la leyenda', () => {
        
        component.leyenda = 'Progreso de carga';

        fixture.detectChanges(); // Dispara la deteccion de cambios
        
        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

        expect(elem.innerHTML).toContain('Progreso de carga');
    });

    it('Debe de mostrar en el input el valor del progreso', (done) => {

        component.cambiarValor(5);
        
        fixture.detectChanges(); // Dispara la deteccion de cambios.
        // Cuando los cambios sean estables.
        
        fixture.whenStable().then(() => {
            const input = fixture.debugElement.query(By.css('input'));
            const elem: HTMLInputElement = input.nativeElement;
    
            expect(elem.value).toBe('55');
            done();
        });

        // await fixture.whenStable() -> Tambien funciona con async y await;
    });

    it('Debe de incrementar/decrementar en 5, con un click en el boton', () => {
        
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));

        botones[0].triggerEventHandler('click', null);
        expect(component.progreso).toBe(45);

        botones[1].triggerEventHandler('click', null);
        expect(component.progreso).toBe(50);
    });

    it('Debe cambiar el progreso al hacer click en el boton', () => {
        
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

        botones[0].triggerEventHandler('click', null);
        fixture.detectChanges();

        expect(elem.innerHTML).toContain('45');
        
        botones[1].triggerEventHandler('click', null);
        fixture.detectChanges();
        
        expect(elem.innerHTML).toContain('50');

    });

});
