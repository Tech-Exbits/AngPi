import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  SystemStats: any;

  QueriesOvertime: any;

  ClientsOvertime: any;

  ForwardDestinations: any;

  isStatsChanged: boolean = false;

  constructor() { }
}
