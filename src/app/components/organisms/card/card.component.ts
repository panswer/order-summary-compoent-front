import { Component, OnInit, Input } from '@angular/core';
import { MusicItem } from '../../pages/main/main.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() item?: MusicItem;

  constructor() { }

  ngOnInit(): void {
  }

}
