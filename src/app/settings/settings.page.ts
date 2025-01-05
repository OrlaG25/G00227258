import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { MyStorageService } from '../services/storage.service.spec';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SettingsPage implements OnInit {

  constructor(private mss: MyStorageService) { }

  ngOnInit() {
    this.mss.set("name", "John");
  }

}
