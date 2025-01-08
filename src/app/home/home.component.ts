import {Component, inject} from '@angular/core';
import { AuthService } from '../core/auth/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private auth = inject(AuthService);
  public user = this.auth.user

  public logout() {
    this.auth.logout()
  }
}
