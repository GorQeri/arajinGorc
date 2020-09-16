import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xare-baner',
  templateUrl: './xare-baner.component.html',
  styleUrls: ['./xare-baner.component.css']
})
export class XareBanerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public tarGoogle(): void {
    console.log('hellovu Raffi');
  }

  public myFunction() {
    const x = document.getElementById("demo");
    x.style.fontSize = "25px";
    x.style.color = "red";
  }
}
