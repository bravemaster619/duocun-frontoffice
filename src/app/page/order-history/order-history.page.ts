import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api/api.service';
import { OrderInterface } from 'src/app/model/order.model';
@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.page.html',
  styleUrls: ['./order-history.page.scss'],
})
export class OrderHistoryPage implements OnInit {

  loading: boolean;
  orders: Array<OrderInterface>;

  constructor(
    private api: ApiService
  ) { 
    this.loading = true;
    this.orders = [];
  }

  ngOnInit() {
    this.api.v2().get("order/history").then(observable => {
      observable.subscribe((orders: Array<OrderInterface>) => this.orders =  orders);
    }).finally(() => this.loading = false);
  }

}
