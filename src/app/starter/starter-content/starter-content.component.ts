import { Component, OnInit } from '@angular/core';
import {} from 'jquery';

// Variable in assets/js/scripts.js file

@Component({
  selector: 'app-starter-content',
  templateUrl: './starter-content.component.html',
  styleUrls: ['./starter-content.component.css']
})
export class StarterContentComponent implements OnInit {	
	shop : any = {};
	image: string;
	constructor() {
	}

	ngOnInit() {
		this.initShop();		
	}
	initShop() {
		this.shop.shop_name = "SILA";
		this.image = "bd81466066064_khach_san_mayana.png";
		this.shop.service_type = "massage&spa";
		this.shop.address = "TP. Hồ Chí Minh";
		this.shop.rating = 8.7;
		this.shop.point = 6;
		this.shop.price = 2000000;
		this.shop.price_promotion = 1000000;
	}	
}

// $(function () {
// 	(<any>$(".list-item")).not(".slick-initialized").slick({
//       infinite: true,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     });
// });