import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gori-component',
  templateUrl: './gori-component.component.html',
  styleUrls: ['./gori-component.component.css']
})
export class GoriComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    console.log('hello world');
  }

}
