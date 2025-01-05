import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonIcon } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { MyStorageService } from '../services/storage.service.spec';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  standalone: true,
  imports: [IonInput, IonHeader, IonToolbar, IonTitle, IonContent, FormsModule, IonButton, IonIcon, RouterModule],
})
export class HomePage {
  countryName: string = ""
  constructor(private router: Router, private storageService: MyStorageService) {
  }

 async openCountries() {
    if (this.countryName.trim()) {
      await this.storageService.set('kw', this.countryName);
      this.router.navigate(["/countries"])
    }

  }
}
