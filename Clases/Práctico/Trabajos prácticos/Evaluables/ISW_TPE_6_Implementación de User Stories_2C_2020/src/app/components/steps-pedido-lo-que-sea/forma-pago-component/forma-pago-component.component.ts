import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormasDePagoEnum } from '../../../domain/enums/formasDePago.enum'
import { Pago } from 'src/app/domain/interfaces/pago.interface';
import { empty } from 'rxjs';

@Component({
  selector: 'app-forma-pago-component',
  templateUrl: './forma-pago-component.component.html',
  styleUrls: ['./forma-pago-component.component.css']
})
export class FormaPagoComponentComponent {

  @Input() pago: Pago;
  @Output() pagoChange: EventEmitter<Pago>;

  @Output() validEvent: EventEmitter<boolean>;

  formasDePago = [
    {
      nombre: 'Efectivo',
      value: FormasDePagoEnum.Efectivo
    },
    {
      nombre: 'Tarjeta de Credito',
      value: FormasDePagoEnum.TarjetaCredito
    }
  ];

  constructor() {
    this.pagoChange = new EventEmitter();
    this.validEvent = new EventEmitter();
   }

  setFormaDePago() {
    if ( this.pago.formaDePago === FormasDePagoEnum.Efectivo ){
      this.pago.tarjeta = {
        nombre: '',
        numero: '',
        cvv: '',
        vencimiento: '',
        brand: ''
      };
    } else {
      this.pago.conCuantoPaga = null;
    }

    this.isValid(false);
    this.pagoChange.emit(this.pago);
  }

  isValid( value ) {
    console.log(value);
    
    this.validEvent.emit( value );
  }
}
