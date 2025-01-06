import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class WeatherPage implements OnInit {

 //TO DO
 // URL https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
 // Key 164d4ad1a03d81eeeaf5d6fcc43fd743
  constructor() { }

  ngOnInit() {
  }

}
