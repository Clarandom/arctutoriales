import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuardGuard } from './admin-guard.guard';
import { OrderViewComponent } from './order-view/order-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';
import { TasksComponent } from './tasks/tasks.component';
import {AdminHomeComponent} from './admin-home/admin-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'product-view', pathMatch: 'full'},
  { path: 'products',
    children: [
        {path: 'view', component: ProductViewComponent},
        {path: 'edit', component: ProductEditComponent},
        {path: 'view/:id', component: ProductIdComponent}
    ]

  },
  // { path: 'products', component: ProductsComponent},
  // { path: 'product-view', component: ProductViewComponent},
  // { path: 'product-edit', component: ProductEditComponent},
  // { path: 'product/10', component: ProductIdComponent}, //this value should be dynamic
  { path: 'order/:id/:id2', component: OrderViewComponent},
  { path: 'search', component: SearchComponent},
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  // { path: '**', component: PageNotFoundComponent},
  {path: 'admin', component: AdminHomeComponent, canActivate: [AdminGuardGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
