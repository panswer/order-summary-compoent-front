import { Component, OnInit, Input } from '@angular/core';
import { MusicItem } from '../../pages/main/main.component';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {

  @Input() music?: MusicItem;

  constructor() { }

  ngOnInit(): void {
  }

}
