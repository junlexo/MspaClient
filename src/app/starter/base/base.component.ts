import { Component, OnInit, Input } from '@angular/core';
import {Message} from '../../message/message.component';

var _that;
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})

export class BaseComponent implements OnInit {
  message;
  constructor() { }
   ngOnInit() {
    this.message = Message();
    
  }
}