import { Component, OnInit } from '@angular/core';
 
export interface MusicItem {
  image?: string,
  title: string,
  price: number
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  item?: MusicItem;

  constructor() { }

  ngOnInit(): void {

    if (!this.item) {
      this.item = {
        title: 'annual plan',
        price: 59.99
      };
    }

  }

}
