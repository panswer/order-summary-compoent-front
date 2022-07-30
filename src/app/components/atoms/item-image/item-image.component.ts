import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-image',
  templateUrl: './item-image.component.html',
  styleUrls: ['./item-image.component.css']
})
export class ItemImageComponent implements OnInit {

  @Input() image?: string;

  constructor() { }

  ngOnInit(): void {
    if(!this.image){
      this.image = '/assets/img/icon-music.svg';
    }
  }

}
