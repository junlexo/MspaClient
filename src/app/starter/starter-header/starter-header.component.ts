import { Component, OnInit } from '@angular/core';
import {Message} from '../../message/message.component';

var _that;
@Component({
  selector: 'app-starter-header',
  templateUrl: './starter-header.component.html',
  styleUrls: ['./starter-header.component.scss']
})
export class StarterHeaderComponent implements OnInit {
  message;
  show_roomtype: boolean = false;
  show_login: boolean = false;
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
  constructor() { }

  ngOnInit() {
  	this.message = Message();
    this.slidePrice();
    this.onLoadFirt();   
    this.slickFilter(); 
  }
  showSelectRoomType(){    
  	this.show_roomtype = !this.show_roomtype;
    $("#overlay").show();
  }
  selectRoomType(event){
  	var target = event.target || event.srcElement || event.currentTarget;
  	var _index = $(".df_overlay span.df_component.df_label").index(target);
  	$(".hour-col.hour-roomtype").find(".btn-hour-content-wrap").html($(".df_overlay span.df_dropdown_option").eq(_index).html());
  }
  slidePrice() {
    (<any>$("#slider-range")).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 100, 300 ],
        slide: function( event, ui ) {          
          $( ".fl-slider__label" ).html("$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
          $( "#amount1" ).val(ui.values[ 0 ]);
          $( "#amount2" ).val(ui.values[ 1 ]);
        }
      });
      $( ".fl-slider__label" ).html( "$" + (<any>$("#slider-range")).slider( "values", 0 ) +
       " - $" + (<any>$("#slider-range")).slider( "values", 1 ) );
  }
  mouseEnter()
  {
    this.show_login = !this.show_login;
    $("#overlay").show();
  }
  onLoadFirt() {
    _that = this;
    $("#overlay").on("click", function(){
      $("#overlay").hide();
       _that.show_login = false;
       _that.show_roomtype= false;
    });    
  }
  slickFilter() {    
    // (<any>$(".slick-filter")).slick({
    //   dots: true,
    //   infinite: true,
    //   speed: 300,
    //   slidesToShow: 1,
    //   centerMode: true,
    //   variableWidth: true
    // });
  }
  afterChange(e) {
    console.log('afterChange');
  }
}