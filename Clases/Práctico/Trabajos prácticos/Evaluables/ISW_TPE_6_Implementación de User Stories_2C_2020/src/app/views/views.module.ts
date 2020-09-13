import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module'
import { ComponentsModule } from '../components/components.module'

import { ViewsRoutingModule } from './views-routing.module';
import { PedidoComponent } from './pedido/pedido.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    PedidoComponent,
    HomeComponent
  ],
  imports: [
    ViewsRoutingModule,
    SharedModule,
    ComponentsModule
  ]
})
export class ViewsModule { }
