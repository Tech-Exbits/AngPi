import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from 'src/app/services/misc/utilities.service';
import { DashboardService } from 'src/app/services/storage/dashboard.service';

@Component({
  selector: 'app-query-blocked',
  templateUrl: './query-blocked.component.html',
  styleUrls: ['./query-blocked.component.scss']
})
export class QueryBlockedComponent implements OnInit {

  color: any;

  constructor(
    private utilities: UtilitiesService, 
    private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.color = {'background-color': this.utilities.getRandomColor()}
  }

  get blocklistQueries(): any {
    if(this.dashboardService.SystemStats){
      return this.utilities.numberWithCommas(this.dashboardService.SystemStats.ads_blocked_today);
    }else{
      return '—';
    }
  }

  get isStatsChanged(): boolean {
    return this.dashboardService.isStatsChanged;
  }

}
