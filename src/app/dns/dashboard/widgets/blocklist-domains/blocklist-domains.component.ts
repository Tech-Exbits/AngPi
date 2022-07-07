import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from 'src/app/services/misc/utilities.service';
import { DashboardService } from 'src/app/services/storage/dashboard.service';

@Component({
  selector: 'app-blocklist-domains',
  templateUrl: './blocklist-domains.component.html',
  styleUrls: ['./blocklist-domains.component.scss']
})
export class BlocklistDomainsComponent implements OnInit {

  color: any;

  constructor(
    private utilities: UtilitiesService, 
    private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.color = {'background-color': this.utilities.getRandomColor()}
  }

  get blocklistDomains(): any {
    if(this.dashboardService.SystemStats){
      return this.utilities.numberWithCommas(this.dashboardService.SystemStats.domains_being_blocked);
    }else{
      return '—';
    }
  }

  get isStatsChanged(): boolean {
    return this.dashboardService.isStatsChanged;
  }

}
