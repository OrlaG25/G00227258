import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { MyHttpService } from '../services/my-http.service';

interface HttpOptions {
  url: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NewsPage implements OnInit {

  countryCode: string = ''; //Store the countryCode
  newsArticles: any[] = []; //Store news articles
  options: HttpOptions = {
    url: 'https://newsdata.io/api/1/latest?apikey=pub_6450225c07b16371ff5bc56be0ebbea6f380f&country='
  };

  constructor(private router: Router, private mhs: MyHttpService) {}

  async ngOnInit() {
    //Retrive the countryCode
      const navigation = this.router.getCurrentNavigation();
      if (navigation?.extras.state) {
        this.countryCode = navigation.extras.state['countryCode'];
        console.log('Country Code:', this.countryCode);
        await this.fetchNews(); //If countryCode is found fetchNews is called
      } else {
        console.error('No country code found');
        this.router.navigate(['/countries']); //If there is an error and no countryCode found navigate back to countris pages
      }
    }

  async fetchNews() { //combines the API and countryCode
    const url = this.options.url + this.countryCode;

    try {
      const result = await this.mhs.get({ url }); //Fetch news data
      this.newsArticles = result.results; //Stores fetched data
      console.log(JSON.stringify(this.newsArticles));
    } catch (error) {
      console.error('Error unable to retrieve news', error); //Logs error
      this.newsArticles = [];
    }
  }
}
