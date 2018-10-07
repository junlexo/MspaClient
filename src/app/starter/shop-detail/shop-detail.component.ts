import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Message} from '../../message/message.component';

var _that;
@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.scss']
})

export class ShopDetailComponent implements OnInit {
  message;
  switchTab : number = 0;
  @Input('tab') tab: number;
  @Output('switTab') switTab: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
   ngOnInit() {
    this.message = Message();       
    this.switchTab = this.tab;
    this.slick();
  }
  onSelectTab(swt) {
  	this.switchTab = swt;
  	this.switTab.emit(swt);
  }
  closeShop() {
  	this.switTab.emit(0);
  }
  slick() {
    setTimeout(function(){
    	(<any>$(".list-item")).not(".slick-initialized").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    }, 1000);    
  }
}