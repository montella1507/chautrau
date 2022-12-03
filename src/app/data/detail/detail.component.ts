import { Component, inject, OnInit } from '@angular/core';
import { DATA_MODULE_CONFIGURATION } from '../data.module';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  config = inject(DATA_MODULE_CONFIGURATION);
  constructor() { }

  ngOnInit() {
  }

}