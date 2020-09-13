import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pedido-component',
  templateUrl: './pedido-component.component.html',
  styleUrls: ['./pedido-component.component.css']
})
export class PedidoComponentComponent {
  public PedidoForm: FormGroup;

  @Input() precio: number;
  @Output() precioChange : EventEmitter< number >;
  @Input() descripcion: string;
  @Output() descripcionChange : EventEmitter< string >;
  @Input() direccionRetiroDelProducto: string;
  @Output() direccionRetiroDelProductoChange : EventEmitter< string >;

  @Input() imagen: File
  @Output() imagenChange : EventEmitter< File >;

  @Output() validEvent: EventEmitter<boolean>;


  constructor() { 
    this.precioChange = new EventEmitter();
    this.descripcionChange = new EventEmitter();
    this.direccionRetiroDelProductoChange = new EventEmitter();
    this.imagenChange = new EventEmitter();
    this.validEvent = new EventEmitter();
  }
   
  ngOnInit():void {
   this.initForm();
   this.setData();
   this.createListeners();
  }

  initForm(){
    this.PedidoForm= new FormGroup({

      descripcionPedido:new FormControl('',[Validators.maxLength(500),Validators.required]),
      direccionBusqueda:new FormControl('',[Validators.required]),
      precioPedido:new FormControl('',[Validators.required]),
    })
  }

  setData(){
    this.PedidoForm.reset({
      descripcionPedido: this.descripcion,
      direccionBusqueda: this.direccionRetiroDelProducto,
      precioPedido: this.precio
    });
  }

  esNoValido(){
    return this.PedidoForm.controls.precioPedido.value < 10;
  }

  getDescripcion(){
    return this.PedidoForm.get('descripcionPedido').value;
  }

  getPrecio(){
    return this.PedidoForm.get('precioPedido').value;
  }

  getDireccion(){
    return this.PedidoForm.get('direccionBusqueda').value;
  }

  setAndEmitDescripcion( value ) {
    this.descripcion = value;
    this.descripcionChange.emit( this.descripcion );
  }

  setAndEmitPrecio( value ) {
    this.precio = value;
    this.precioChange.emit( this.precio );
  }

  setAndEmitDireccion( value ) {
    this.direccionRetiroDelProducto = value;
    this.direccionRetiroDelProductoChange.emit( this.direccionRetiroDelProducto );
  }

  selectImage( image ) {
    this.imagen = image;
    this.imagenChange.emit(this.imagen);
  }


  createListeners() {
    this.PedidoForm.statusChanges.subscribe( status => {
      this.setAndEmitDescripcion( this.getDescripcion() );
      this.setAndEmitDireccion( this.getDireccion() );
      this.setAndEmitPrecio( this.getPrecio() );      

      this.validEvent.emit(status!=='INVALID');
    });
  }
}
