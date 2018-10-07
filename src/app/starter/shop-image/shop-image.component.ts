import { Component, OnInit, Input } from '@angular/core';
import {Message} from '../../message/message.component';

var _that;
@Component({
  selector: 'app-shop-image',
  templateUrl: './shop-image.component.html',
  styleUrls: ['./shop-image.component.scss']
})

export class ShopImageComponent implements OnInit {
  message;
  list : any;  
  constructor() { }
   ngOnInit() {
    this.message = Message();
    this.loadImg();    
  }
  loadImg() {
  	this.list  = ['img1.jpg','img2.jpg', 'img3.png', 'img4.jpg'];
  }  
}