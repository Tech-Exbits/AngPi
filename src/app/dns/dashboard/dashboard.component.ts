import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FasterThanLightService } from 'src/app/services/crucial/faster-than-light.service';
import { DashboardService } from 'src/app/services/storage/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  interval: any;
  subscription: Subscription | undefined;

  constructor(
    private ftlService: FasterThanLightService, 
    public dashboardService: DashboardService) { 
      this.getData();
    }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.getData()
    }, 5000);
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
    if(this.interval) {
      clearInterval(this.interval);
    }
  }

  getData(): void {
    this.subscription = this.ftlService.getSystemStats().subscribe((response: any) => {
      if(response['message'] == 'success'){
        this.dashboardService.isStatsChanged = true;
        setTimeout(()=>{
          this.dashboardService.SystemStats = response['response'];
          this.dashboardService.isStatsChanged = false;
        }, 2000);
        this.subscription?.unsubscribe();
      }
    }, 
    (error: any) => {
      console.log(error);
    })
  }

}
