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

  countryCode: string = '';
  newsArticles: any[] = [];
  options: HttpOptions = {
    url: 'https://newsdata.io/api/1/latest?apikey=pub_6450225c07b16371ff5bc56be0ebbea6f380f&country='
  };

  constructor(private router: Router, private mhs: MyHttpService) {}

  ngOnInit() {
    // TODO: Call fetchNews after setting the country code
  }

  async fetchNews() {
    const url = this.options.url + this.countryCode;

    try {
      const result = await this.mhs.get({ url });
      this.newsArticles = result.results;
      console.log(JSON.stringify(this.newsArticles));
    } catch (error) {
      console.error('Error unable to retrieve news', error);
      this.newsArticles = [];
    }
  }
}