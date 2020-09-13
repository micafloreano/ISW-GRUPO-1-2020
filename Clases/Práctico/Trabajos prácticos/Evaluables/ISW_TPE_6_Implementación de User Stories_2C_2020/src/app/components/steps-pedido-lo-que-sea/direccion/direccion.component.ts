import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css']
})
export class DireccionComponent implements OnInit {
  public DireccionForm: FormGroup;

  @Input() localidades = [];

  @Input() ciudad;
  @Output() ciudadChange: EventEmitter<string>;

  @Input() calle;
  @Output() calleChange: EventEmitter<string>;

  @Input() numero;
  @Output() numeroChange: EventEmitter<string>;

  @Input() referencia;
  @Output() referenciaChange: EventEmitter<string>;

  @Input() latitud;
  @Output() latitudChange: EventEmitter<string>;

  @Input() longitud;
  @Output() longitudChange: EventEmitter<string>;

  @Output() validEvent: EventEmitter<boolean>;

  lat = -31.4135;
  lng = -64.18105;

  enable;

  constructor() {
    this.ciudadChange = new EventEmitter();
    this.calleChange = new EventEmitter();
    this.numeroChange = new EventEmitter();
    this.referenciaChange = new EventEmitter();
    this.latitudChange = new EventEmitter();
    this.longitudChange = new EventEmitter();
    this.validEvent = new EventEmitter();
  }

  ngOnInit(): void {
    this.initForm();
    this.setData();
    this.createListeners();
  }

  initForm() {
    this.DireccionForm = new FormGroup({
      ciudadPedido: new FormControl('', [Validators.required]),
      callePedido: new FormControl('', [Validators.maxLength(100), this.requiereDireccion]),
      numeroPedido: new FormControl('', [Validators.required]),
      referenciaPedido: new FormControl('', [Validators.maxLength(150)]),
    })
  }

  requiereDireccion() {
   /* if( !this.latitud && !this.longitud ) {
      return {
        requiereDireccion: true
      };
    }*/
    return null;
  }

  setData(){
    this.DireccionForm.reset({
      ciudadPedido: this.ciudad,
      callePedido: this.calle,
      numeroPedido: this.numero,
      referenciaPedido: this.referencia,
    });
  }

  setCoordenadas(coord) {
    this.disableForm();

    this.latitud = coord.lat;
    this.latitudChange.emit(this.latitud);
    this.longitud = coord.lng;
    this.longitudChange.emit(this.longitud);
  }

  coordenadasMap(localidadName) {
    const { lat, lon } = this.localidades.find(l => l.nombre === localidadName).centroide;
    this.lat = lat;
    this.lng = lon;
  }

  disableForm() {
    this.DireccionForm.get('callePedido').disable();
    this.DireccionForm.get('numeroPedido').disable();

    this.setAndEmitCalle('');
    this.setAndEmitNumero('');
  }

  setAndEmitCiudad(value) {
    if (value) {
      this.DireccionForm.get('callePedido').disabled && this.DireccionForm.get('callePedido').enable();
      this.DireccionForm.get('numeroPedido').disabled && this.DireccionForm.get('numeroPedido').enable();

      this.ciudad = value;
      this.ciudadChange.emit(this.ciudad);

      this.coordenadasMap(this.ciudad);

      this.latitud = '';
      this.latitudChange.emit(this.latitud);
      this.longitud = '';
      this.longitudChange.emit(this.longitud);
    }
  }

  setAndEmitCalle(value) {
    this.calle = value;
    this.calleChange.emit(this.calle);
  }
  setAndEmitNumero(value) {
    this.numero = value;
    this.numeroChange.emit(this.numero);
  }
  setAndEmitReferencia(value) {
    this.referencia = value;
    this.referenciaChange.emit(this.referencia);
  }

  getCiudad() {
    return this.DireccionForm.get('ciudadPedido').value;
  }

  getCalle() {
    return this.DireccionForm.get('callePedido').value;
  }

  getNumero() {
    return this.DireccionForm.get('numeroPedido').value;
  }

  getReferencia() {
    return this.DireccionForm.get('referenciaPedido').value;
  }

  createListeners() {
    this.DireccionForm.statusChanges.subscribe(status => {
      this.setAndEmitCiudad(this.getCiudad());
      this.setAndEmitCalle(this.getCalle());
      this.setAndEmitNumero(this.getNumero());
      this.setAndEmitReferencia(this.getReferencia());

      this.validEvent.emit(status!=='INVALID');
    });
  }
}
