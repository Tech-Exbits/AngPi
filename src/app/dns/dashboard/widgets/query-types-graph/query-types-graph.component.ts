import { Component, OnInit } from '@angular/core';

export var single = [
  {
    "name": "Germany",
    "value": 8940000
  },
  {
    "name": "USA",
    "value": 5000000
  },
  {
    "name": "France",
    "value": 7200000
  },
    {
    "name": "UK",
    "value": 6200000
  }
];

@Component({
  selector: 'app-query-types-graph',
  templateUrl: './query-types-graph.component.html',
  styleUrls: ['./query-types-graph.component.scss']
})
export class QueryTypesGraphComponent implements OnInit {

  ngOnInit(): void {
  }

  single: any[] = [];
  
  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = false;
  isDoughnut: boolean = false;
  legendPosition: any = 'right';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(data: any): void {
    
  }

  onActivate(data: any): void {
    
  }

  onDeactivate(data: any): void {
    
  }

}
