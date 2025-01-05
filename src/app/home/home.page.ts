import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  standalone: true,
  imports: [IonInput, IonHeader, IonToolbar, IonTitle, IonContent, FormsModule, IonButton],
})
export class HomePage {
  countryName: string = ""
  constructor(private router: Router) {}

  openCountries() {
    if (this.countryName.trim()) {
      this.router.navigate(["/countries"])
    }

  }
}
