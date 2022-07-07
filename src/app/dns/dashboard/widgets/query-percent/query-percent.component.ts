import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from 'src/app/services/misc/utilities.service';
import { DashboardService } from 'src/app/services/storage/dashboard.service';

@Component({
  selector: 'app-query-percent',
  templateUrl: './query-percent.component.html',
  styleUrls: ['./query-percent.component.scss']
})
export class QueryPercentComponent implements OnInit {

  color: any;

  constructor(
    private utilities: UtilitiesService, 
    private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.color = {'background-color': this.utilities.getRandomColor()}
  }

  get percentage(): any {
    if(this.dashboardService.SystemStats){
      var percent = this.dashboardService.SystemStats.ads_percentage_today
      return String(Math.round(percent * 10) / 10) + "%";
    }else{
      return '—';
    }
  }

  get isStatsChanged(): boolean {
    return this.dashboardService.isStatsChanged;
  }

}
