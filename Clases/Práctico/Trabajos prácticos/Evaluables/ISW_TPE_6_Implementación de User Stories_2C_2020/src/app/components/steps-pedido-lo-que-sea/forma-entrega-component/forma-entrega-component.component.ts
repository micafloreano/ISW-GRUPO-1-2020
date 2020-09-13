import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pago } from 'src/app/domain/interfaces/pago.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Entrega } from 'src/app/domain/interfaces/entrega.interface';
import { FormasDeEntregaEnum } from '../../../domain/enums/formasDeEntrega.enum';

@Component({
  selector: 'app-forma-entrega-component',
  templateUrl: './forma-entrega-component.component.html',
  styleUrls: ['./forma-entrega-component.component.css']
})
export class FormaEntregaComponentComponent implements OnInit {

  public formaDeEntregaForm: FormGroup;

  @Output() validEvent: EventEmitter<boolean>;

  @Input() pago: Pago;
  @Input() entrega: Entrega;
  @Output() entregaChange: EventEmitter<Entrega>;

  hide = true;

  formasDeEntrega = [
    {
      txt: "Lo antes posible",
      value: FormasDeEntregaEnum.LoAntesPosible
    },
    {
      txt: "Fecha/hora",
      value: FormasDeEntregaEnum.FechaHora
    },
  ];

  constructor() {
    this.entregaChange = new EventEmitter();
    this.validEvent = new EventEmitter();
  }

  ngOnInit(): void {
    this.initForm();
    this.setData();
    this.createListeners();

    this.validEvent.emit(true);
  }

  initForm() {
    this.formaDeEntregaForm = new FormGroup({
      formasEntregaForm: new FormControl('', [Validators.required]),
      fechaHoraForm: new FormControl('', []),
    })
  }

  setData() {
    this.formaDeEntregaForm.reset({
      formasEntregaForm: this.entrega.formaDeEntrega,
      fechaHoraForm: this.entrega.fechaHora
    });
  }

  getFormaDeEntrega() {
    return this.formaDeEntregaForm.get('formasEntregaForm').value;
  }

  getFechaHora() {
    return this.formaDeEntregaForm.get('fechaHoraForm').value;
  }

  setFDE(value) {
    this.entrega.formaDeEntrega = value;
  }

  setFecha(value) {
    this.entrega.fechaHora = value;
  }

  validateFecha() {
    if (this.entrega.formaDeEntrega === FormasDeEntregaEnum.FechaHora) {
      if( this.entrega.fechaHora ) {
        return true;
      }
      return false;
    }
    return true;
  }

  createListeners() {
    this.formaDeEntregaForm.statusChanges.subscribe(status => {
      this.setFDE(this.getFormaDeEntrega());

      if (this.entrega.formaDeEntrega === FormasDeEntregaEnum.FechaHora) {
        this.hide = false;
        this.setFecha(this.getFechaHora());
      } else {
        this.hide = true;
      }

      this.entregaChange.emit(this.entrega);

      this.validEvent.emit(status !== 'INVALID' && this.validateFecha());
    });
  }

}
