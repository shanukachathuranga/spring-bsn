import {Component, inject, signal} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/services';
import {CodeInputModule} from 'angular-code-input';

@Component({
  selector: 'app-activate-account',
  imports: [
    CodeInputModule
  ],
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.scss'
})
export class ActivateAccountComponent {
  message: string = '';
  isOkay = signal<boolean>(false);
  submitted = signal<boolean>(false);
  private authService = inject(AuthenticationService);
  private router = inject(Router);


  onCodeCompleted(token: string) {
    this.confirmAccount(token);
  }

  redirectToLogin() {
    this.router.navigate(['login']);
  }

  private confirmAccount(token: string) {
    this.authService.confirm({
      token
    }).subscribe({
      next: () => {
        this.message = 'Your account has been successfully activated.\nNow you can proceed to login'
        this.isOkay.set(true);
        this.submitted.set(true);
      },
      error: () => {
        this.message = 'Token has been expired or invalid'
        this.submitted.set(true);
        this.isOkay.set(false);

      }
    });
  }
}
