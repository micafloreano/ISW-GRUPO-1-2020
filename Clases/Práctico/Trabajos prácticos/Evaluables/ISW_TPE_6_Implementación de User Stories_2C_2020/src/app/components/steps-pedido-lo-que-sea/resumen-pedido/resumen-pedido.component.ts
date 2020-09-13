import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pedido } from 'src/app/domain/interfaces/pedido.interface';
import { FormasDePagoEnum } from '../../../domain/enums/formasDePago.enum';
@Component({
  selector: 'app-resumen-pedido',
  templateUrl: './resumen-pedido.component.html',
  styleUrls: ['./resumen-pedido.component.css']
})
export class ResumenPedidoComponent implements OnInit {

  @Input() pedido: Pedido;
  @Output() validEvent: EventEmitter<boolean>;
  url;

  constructor() { 
    this.validEvent = new EventEmitter();
  }

  ngOnInit(): void {
    this.validEvent.emit(true);
  }


  showImage() {
    const reader = new FileReader();
    reader.readAsDataURL(this.pedido.imagen);

    reader.onload = (event) => {
      this.url = event.target.result;
    }
  }
}
