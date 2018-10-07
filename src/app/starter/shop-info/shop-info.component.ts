import { Component, OnInit, Input } from '@angular/core';
import {Message} from '../../message/message.component';

var _that;
@Component({
  selector: 'app-shop-info',
  templateUrl: './shop-info.component.html',
  styleUrls: ['./shop-info.component.scss']
})

export class ShopInfoComponent implements OnInit {
  message;
  constructor() { }
   ngOnInit() {
    this.message = Message();
    
  }
}