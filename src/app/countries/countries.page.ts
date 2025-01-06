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

  keyword: string =""; //Store keywork search
  countryInfo:any[] = []; //Store country info
  options: HttpOptions = {
    url: 'https://restcountries.com/v3.1/name/'
  };

  constructor(private mss:MyStorageService, private mhs:MyHttpService, private router: Router) { }

  async ngOnInit() {
    this.getKW();
  }
   async getKW() { 
    this.keyword = await this.mss.get('kw'); //Retrive the keywork from ionic storage

    const url = this.options.url + this.keyword; //API URL

    try {
      const result = await this.mhs.get({ url }); //Fetch country data
    this.countryInfo = result; //Store fetched country data
    console.log(JSON.stringify(this.countryInfo));
  } catch (error) {
    console.error('Error unabe to retrive data', error);
    this.countryInfo = []; //Info reset if there is an error
  }
}

openNews(countryName: String) {
  this.router.navigate(['/news'], {state: { countryName} }); //Navigate to the selected countries news page
}
openWeather(countryName: String) {
  this.router.navigate(['/weather'], {state: { countryName }}); //Navigate to the selected countries weather page
}
}
