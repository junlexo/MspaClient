import { Component, OnInit } from '@angular/core';
import {} from 'jquery';

// Variable in assets/js/scripts.js file
declare var AdminLTE: any;

@Component({
  selector: 'app-starter-content',
  templateUrl: './starter-content.component.html',
  styleUrls: ['./starter-content.component.css']
})
export class StarterContentComponent implements OnInit {
	show_roomtype: boolean = false;
  constructor() { }

  ngOnInit() {
    // Update the AdminLTE layouts
    AdminLTE.init();
  }
  showSelectRoomType(){
  	this.show_roomtype = !this.show_roomtype;
  }
  selectRoomType(event){
  	var target = event.target || event.srcElement || event.currentTarget;
  	var _index = $(".df_overlay span.df_component.df_label").index(target);
  	$(".hour-col.hour-roomtype").find(".btn-hour-content-wrap").html($(".df_overlay span.df_dropdown_option").eq(_index).html());
  }
}
