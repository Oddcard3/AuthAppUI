import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() name: string;
  @Input() id: string;
  @Input() active: boolean;
  @Input() onSelect: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
