import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FasterThanLightService } from 'src/app/services/crucial/faster-than-light.service';
import { UtilitiesService } from 'src/app/services/misc/utilities.service';
import { DashboardService } from 'src/app/services/storage/dashboard.service';

@Component({
  selector: 'app-client-activity-graph',
  templateUrl: './client-activity-graph.component.html',
  styleUrls: ['./client-activity-graph.component.scss']
})
export class ClientActivityGraphComponent implements OnInit {
  
  interval: any;
  data: any[] = [{
    "name": "Germany",
    "series": [
      {
        "name": "2010",
        "value": 7300000
      },
      {
        "name": "2011",
        "value": 8940000
      }
    ]
  },

  {
    "name": "USA",
    "series": [
      {
        "name": "2010",
        "value": 7870000
      },
      {
        "name": "2011",
        "value": 8270000
      }
    ]
  },

  {
    "name": "France",
    "series": [
      {
        "name": "2010",
        "value": 5000002
      },
      {
        "name": "2011",
        "value": 5800000
      }
    ]
  }];

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
  legendTitle: string = 'Clients';
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

  getData(): any {
    this.subscription = this.ftlService.getClientsOvertime().subscribe((response: any) => {
      if(response['message'] == 'success')  {
        this.dashboardService.ClientsOvertime = response['response'];
        // this.data = response['response'];
        console.log(response);
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
