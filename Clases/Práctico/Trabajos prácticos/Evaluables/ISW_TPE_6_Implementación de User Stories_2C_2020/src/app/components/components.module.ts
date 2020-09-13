import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';


// Componentes
import { PedidoComponentComponent } from './steps-pedido-lo-que-sea/pedido-component/pedido-component.component';
import { FormaPagoComponentComponent } from './steps-pedido-lo-que-sea/forma-pago-component/forma-pago-component.component';
import { FormaEntregaComponentComponent } from './steps-pedido-lo-que-sea/forma-entrega-component/forma-entrega-component.component';
import { FeedbackComponentComponent } from './steps-pedido-lo-que-sea/feedback-component/feedback-component.component';
import { DireccionComponent } from './steps-pedido-lo-que-sea/direccion/direccion.component';
import { CreditCardComponent } from './UI/formasDePago/credit-card/credit-card.component';
import { PagoEfectivoComponent } from './UI/formasDePago/pago-efectivo/pago-efectivo.component';
import { ResumenPedidoComponent } from './steps-pedido-lo-que-sea/resumen-pedido/resumen-pedido.component';
import { SharedModule } from '../shared/shared.module';
import { UploadImageComponent } from './UI/upload-image/upload-image.component';
import { MapaComponent } from './UI/mapa/mapa.component';



@NgModule({
  declarations: [
    PedidoComponentComponent,
    FormaPagoComponentComponent,
    FormaEntregaComponentComponent,
    FeedbackComponentComponent,
    DireccionComponent,
    ResumenPedidoComponent,
    CreditCardComponent,
    PagoEfectivoComponent,
    UploadImageComponent,
    MapaComponent,
  ],
  imports: [
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDGruSoP5nGcOlW0s6e4JFE7JIah6N0FaA'   
   })
  ],
  exports: [
    PedidoComponentComponent,
    DireccionComponent,
    FormaPagoComponentComponent,
    FormaEntregaComponentComponent,
    FeedbackComponentComponent,
    ResumenPedidoComponent,
  ]
})
export class ComponentsModule { }
