import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-pago-efectivo',
  templateUrl: './pago-efectivo.component.html',
  styleUrls: ['./pago-efectivo.component.css']
})
export class PagoEfectivoComponent implements OnInit {
  public vuelto = 0;
  public MontoInvalido = false;
  public EfectivoForm: FormGroup;
  @Input() monto;
  @Input() precioPedido;
  @Output() montoChange: EventEmitter<number>;

  @Output() validEvent: EventEmitter<boolean>;


  constructor() { 
    this.montoChange = new EventEmitter();
    this.validEvent = new EventEmitter();
  }

  ngOnInit(): void {
    this.initForm();
    this.setData();
    this.createListeners();
  }
  
  initForm() {
    this.EfectivoForm= new FormGroup({
      precioPedido:new FormControl('',[Validators.required]),
    })
  }

  setData(){
    this.EfectivoForm.reset({
      precioPedido: this.monto
    });
  }

  getMonto(){
    return this.EfectivoForm.get('precioPedido').value;
  }

  isMontoInvalido(){
    return this.monto < this.precioPedido;
  }

  setAndEmitMonto( value ) {
    this.monto = value;
    this.montoChange.emit( this.monto );
    this.calcularVuelto();
  }

  calcularVuelto(){
    if ( this.monto - this.precioPedido > 0){
      this.vuelto = this.monto - this.precioPedido;
    }
    else{
      this.vuelto = 0;
    }
  }

  createListeners() {
    this.EfectivoForm.statusChanges.subscribe(status => {
      this.setAndEmitMonto(this.getMonto());

      this.validEvent.emit(status!=='INVALID');
    });
  }

}
