import {Component, inject} from '@angular/core';
import {RegistrationRequest} from '../../services/models/registration-request';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {FormsModule} from '@angular/forms';
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/services';

@Component({
  selector: 'app-register',
  imports: [
    FaIconComponent,
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerRequest: RegistrationRequest = {email: '', firstname: '', lastname: '', password: ''};
  errorMsg: Array<string> = [];

  protected readonly faSignInAlt = faSignInAlt;
  private router = inject(Router);
  private authService = inject(AuthenticationService);

  login() {
    this.router.navigate(['login']);
  }

  register() {
    this.errorMsg = [];
    this.authService.register({
      body: this.registerRequest
    }).subscribe({
      next: () => {
        this.router.navigate(['activate-account']);
      },
      error: (err) => {
        this.errorMsg = err.error.validationErrors;
      }
    })
  }
}
