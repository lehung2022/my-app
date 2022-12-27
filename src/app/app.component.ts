import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  

})
export class AppComponent {
  title: string = "fighters in the world"
  imgSrc: string = "https://i0.wp.com/www.mindspeaks.co/wp-content/uploads/2020/05/miyamoto_musashi___vagabond_by_asi4abarai_dd23c8p-fullview.jpg?fit=1200%2C675&ssl=1";
  // favoriteFlight: string = "Red Eyes";
  constructor () {

  }
}
