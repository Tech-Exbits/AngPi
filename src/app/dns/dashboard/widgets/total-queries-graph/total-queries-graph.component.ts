import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FasterThanLightService } from 'src/app/services/crucial/faster-than-light.service';
import { UtilitiesService } from 'src/app/services/misc/utilities.service';
import { DashboardService } from 'src/app/services/storage/dashboard.service';

@Component({
  selector: 'app-total-queries-graph',
  templateUrl: './total-queries-graph.component.html',
  styleUrls: ['./total-queries-graph.component.scss']
})
export class TotalQueriesGraphComponent implements OnInit, OnDestroy {

  interval: any;
  data: any[] = [];

  subscription: Subscription | undefined;

  // options
  showXAxis: boolean = false;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = '';
  showYAxisLabel: boolean = false;
  yAxisLabel: string = '';
  legendTitle: string = 'Queries';
  legendPosition: any = 'right';

  colorScheme = {
    domain: []
  };

  constructor(
    private ftlService: FasterThanLightService, 
    private dashboardService: DashboardService,
    private utilities: UtilitiesService) {
      var color:any = [];
      for (var i = 0; i < 2; i++) {
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
    if(this.interval) {
      clearInterval(this.interval);
    }
  }

  getData(): any {
    this.subscription = this.ftlService.getTotalOvertime().subscribe((response: any) => {
      if(response['message'] == 'success')  {
        this.dashboardService.QueriesOvertime = response['response'];
        this.data = response['response'];
      }
      this.subscription?.unsubscribe();
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
