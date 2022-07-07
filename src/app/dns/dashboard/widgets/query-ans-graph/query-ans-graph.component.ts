import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FasterThanLightService } from 'src/app/services/crucial/faster-than-light.service';
import { UtilitiesService } from 'src/app/services/misc/utilities.service';
import { DashboardService } from 'src/app/services/storage/dashboard.service';

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
  selector: 'app-query-ans-graph',
  templateUrl: './query-ans-graph.component.html',
  styleUrls: ['./query-ans-graph.component.scss']
})
export class QueryAnsGraphComponent implements OnInit, OnDestroy {

  interval: any;
  data: any[] = [];

  subscription: Subscription | undefined;
  
  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = false;
  isDoughnut: boolean = false;
  legendPosition: any = 'right';

  colorScheme = {
    domain: []
  };

  constructor(
    private ftlService: FasterThanLightService, 
    private dashboardService: DashboardService,
    private utilities: UtilitiesService) {
      var color:any = [];
      for (var i = 0; i < 3; i++) {
        color.push(this.utilities.getRandomColor());
        this.colorScheme['domain'] = color;
      }
      this.getData();
  }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.getData()
    }, 600000);
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getData(): any {
    this.subscription = this.ftlService.getForwardedDestinations().subscribe((response: any) => {
      if(response['message'] == 'success'){
        console.log(response);
        this.dashboardService.ForwardDestinations = response['response'];
        this.data = response['response'];
      }
    }, 
    (error: any) => {
      console.log(error);
    })
  }

  onSelect(data: any): void {
    
  }

  onActivate(data: any): void {
    
  }

  onDeactivate(data: any): void {
    
  }

}
