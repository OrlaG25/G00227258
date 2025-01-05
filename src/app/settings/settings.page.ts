import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonRadio, IonRadioGroup,IonLabel } from '@ionic/angular/standalone';
import { MyStorageService } from '../services/storage.service.spec';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonRadio, IonRadioGroup,IonLabel]
})
export class SettingsPage implements OnInit {
  unitSelected: string ='metric';

  constructor(private mss: MyStorageService) { }

  async ngOnInit() {
    const savedUnit = await this.mss.get('selectedUnit');
    if (savedUnit) {
      this.unitSelected = savedUnit;
    }
    }
    async saveSelected() {
    await this.mss.set("selectUnit", this.unitSelected);
  }

}
