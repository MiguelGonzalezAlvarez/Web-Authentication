import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent {

  miFormulario: FormGroup = this.fb.group({
    name: ['Test', [Validators.required]],
    email: ['test@test.com', [Validators.required, Validators.email]],
    password: ['conT_raseNya_Ultra_Segura_Real_NO_TesT', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }


  registro() {
    const { name, email, password } = this.miFormulario.value;

    this.authService.registro(name, email, password).subscribe(ok => {
      if (ok === true) {
        this.router.navigateByUrl('/dashboard');
      } else {
        Swal.fire('Error', ok, 'error');
      }
    });
  }

}
