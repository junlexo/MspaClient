import { Component, OnInit, Input } from '@angular/core';
import {Message} from '../../message/message.component';

var _that;
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})

export class ShopComponent implements OnInit {
  message;
  swt : number = 0;
  @Input('image') image: string;
  @Input('shopInfo') shop;
  constructor() { }
   ngOnInit() {
  	this.message = Message();   
  }
  switTab(swt:any) {
    this.swt = swt;
  }
}