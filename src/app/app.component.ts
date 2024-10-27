import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginFormComponent} from './login-form/login-form.component';
import {NavbarComponent} from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginFormComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularFormularioYRutas';
}
