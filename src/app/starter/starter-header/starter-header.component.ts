import { Component, OnInit } from '@angular/core';
import {Message} from '../../message/message.component';

@Component({
  selector: 'app-starter-header',
  templateUrl: './starter-header.component.html',
  styleUrls: ['./starter-header.component.css']
})
export class StarterHeaderComponent implements OnInit {
  message;
  constructor() { }

  ngOnInit() {
  	this.message = Message();
  }

}
