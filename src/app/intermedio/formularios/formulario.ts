import { FormBuilder, FormGroup, Validators } from '@angular/forms';


export class FormularioLogin{
 
  public form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    
    this.form = fb.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]


    })

  }


}