import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-item',
  templateUrl: './best-item.component.html',
  styleUrls: ['./best-item.component.css']
})
export class BestItemComponent implements OnInit {

  constructor() { 
}
  ngOnInit(): void { 
  }
@Input() ProductData:any;
}
