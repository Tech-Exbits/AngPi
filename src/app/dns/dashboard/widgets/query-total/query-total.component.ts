import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from 'src/app/services/misc/utilities.service';
import { DashboardService } from 'src/app/services/storage/dashboard.service';

@Component({
  selector: 'app-query-total',
  templateUrl: './query-total.component.html',
  styleUrls: ['./query-total.component.scss']
})
export class QueryTotalComponent implements OnInit {

  color: any;

  constructor(
    private utilities: UtilitiesService,
    private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.color = {'background-color': this.utilities.getRandomColor()}
  }

  get totalQueries(): any {
    if(this.dashboardService.SystemStats){
      return this.utilities.numberWithCommas(this.dashboardService.SystemStats.dns_queries_today);
    }else{
      return '—';
    }
  }

  get totalClients(): any {
    if(this.dashboardService.SystemStats){
      return this.dashboardService.SystemStats.unique_clients;
    }else{
      return '—';
    }
  }

  get isStatsChanged(): boolean {
    return this.dashboardService.isStatsChanged;
  }

}
