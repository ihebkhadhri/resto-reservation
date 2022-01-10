import { Component, OnInit } from '@angular/core';
import { plats } from "./plats-list";
@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent implements OnInit {
  public platsList = plats;

  constructor() { }

  ngOnInit(): void {
    console.log(this.platsList);
  }

}
