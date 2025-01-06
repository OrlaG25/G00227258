import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { MyStorageService } from '../services/storage.service.spec';
import { MyHttpService } from '../services/my-http.service';
import { Router } from '@angular/router';

interface HttpOptions {
  url: string;
}

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton]
})
export class CountriesPage implements OnInit {

  keyword: string ="";
  countryInfo:any[] = [];
  options: HttpOptions = {
    url: 'https://restcountries.com/v3.1/name/'
  };

  constructor(private mss:MyStorageService, private mhs:MyHttpService, private router: Router) { }

  async ngOnInit() {
    this.getKW();
  }
   async getKW() { 
    this.keyword = await this.mss.get('kw');

    const url = this.options.url + this.keyword;

    try {
      const result = await this.mhs.get({ url });
    this.countryInfo = result;
    console.log(JSON.stringify(this.countryInfo));
  } catch (error) {
    console.error('Error unabe to retrive data', error);
    this.countryInfo = [];
  }
}

openNews(countryName: String) {
  this.router.navigate(['/news, countryName']);
}
openWeather(countryName: String) {
  this.router.navigate(['/weather, countryName']);
}
}
