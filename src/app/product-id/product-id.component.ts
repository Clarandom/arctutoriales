import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-id',
  templateUrl: './product-id.component.html',
  styleUrls: ['./product-id.component.scss']
})
export class ProductIdComponent implements OnInit {

  queryParams = '';
  searchKeyword = '';

  constructor(private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe(data => {
      this.searchKeyword = data.id;
    },
    );
  };

  updateSearch(): void {
    alert("hola!" )
  };
  ngOnInit(): void {
  }

}
