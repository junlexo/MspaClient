'use strict';
import { Component, OnInit } from '@angular/core';
import {Message} from '../../message/message.component';
import {IMyDpOptions} from 'mydatepicker';

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
  dateIn: Date = new Date();
  dateOut: Date = new Date();
  settings = {
      bigBanner: true,
      timePicker: true,
      format: 'dd-MMM-yyyy HH:mm a',
      defaultOpen: false,

  }
  constructor() { }
  onDateSelect(event, btn) {      
    var my_btn = $(btn);    
    // $('.my-date-picker').removeClass("active");
    $("#overlay").hide();
    my_btn.find('time')[0].innerHTML = _that.convertDatetime(event);    
  }

  ngOnInit() {
  	this.message = Message();
    this.slidePrice();
    this.onLoadFirt();   
    this.slickFilter(); 
  }  
  //show roomtype
  showSelectRoomType(){    
  	this.show_roomtype = !this.show_roomtype;
    $("#overlay").show();
  }
  //select roomtype
  selectRoomType(event){
  	var target = event.target || event.srcElement || event.currentTarget;
  	var _index = $(".df_overlay span.df_component.df_label").index(target);
  	$(".hour-col.hour-roomtype").find(".btn-hour-content-wrap").html($(".df_overlay span.df_dropdown_option").eq(_index).html());
  }
  //range price
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
  //show overlay  
  mouseEnter()
  {
    this.show_login = !this.show_login;
    $("#overlay").show();
  }
  //add loadFirt
  onLoadFirt() {
    _that = this;
    $("#overlay").on("click", function(){
      _that.hideDatetimePicker();
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
  showPicker(event) {
    var my_dp = $(event).find('.my-date-picker');
    
    if(my_dp.hasClass("active") == true)
    {
      this.hideDatetimePicker();
    }
    else  
    {
      my_dp.addClass("active");
      $("#overlay").show();        
    }
  }
  convertDatetime(date) {
    var h = date.getHours();
    var m = date.getMinutes();
    if(h < 10)
      h = '0' + h;    
    if(m < 10)
      m = '0' + m;
    return ((date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear() + " " + 
      h + ":" + m);
  } 
  hideDatetimePicker() {
    $('.my-date-picker').removeClass("active");
    $("#overlay").hide();
  }
}