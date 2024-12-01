import { NavbarComponent } from './routes/navbar/navbar.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './routes/footer/footer.component';
import { LandingPageComponent } from './routes/landingPage/landingPage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'laundry';
}
