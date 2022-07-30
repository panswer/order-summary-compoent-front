import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-price',
  templateUrl: './item-price.component.html',
  styleUrls: ['./item-price.component.css']
})
export class ItemPriceComponent implements OnInit {

  @Input() price?: number;

  constructor() { }

  ngOnInit(): void {
  }

}
