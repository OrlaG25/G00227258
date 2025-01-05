import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { StorageService } from '../services/storage.service';
import { MyStorageService } from '../services/storage.service.spec';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CountriesPage implements OnInit {

  keyword: string ="";

  constructor(private mss:MyStorageService) { }

  ngOnInit() {
    this.getKW();
  }
   async getKW() { 
    this.keyword = await this.mss.get('kw');
  }

}
