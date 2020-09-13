import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Card } from '../../../../domain/interfaces/card.interface'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { isVisaCard, getCardType } from '../../../../helpers/cardBrand.helper'

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {
  public cardForm: FormGroup;

  @Input() card: Card;
  @Output() cardChange: EventEmitter<Card>;

  ano = '';
  mes = '';

  @Output() validEvent: EventEmitter<boolean>;


  constructor() {
    this.cardChange = new EventEmitter();
    this.validEvent = new EventEmitter();
  }

  ngOnInit(): void {
    this.initForm();
    this.createListeners();
  }

  initForm() {
    this.cardForm = new FormGroup({
      nombreForm: new FormControl('', [Validators.required]),
      numeroForm: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
      cvvForm: new FormControl('', [Validators.required]),
      mesForm: new FormControl('', [Validators.required]),
      anoForm: new FormControl('', [Validators.required]),
    })
  }

  setCardBrand() {
    this.card.brand = getCardType(this.card.numero);
  }

  getMeses() {
    const meses = [];
    for (let index = 1; index < 13; index++) {
      meses.push(index);
    }

    return meses;
  }

  getAnos() {
    const anos = [];
    for (let index = 0; index < 20; index++) {
      anos.push(new Date().getFullYear() + index)
    }

    return anos;
  }

  setDate() {
    this.card.vencimiento = !this.mes || !this.ano ? null : this.mes + '/' + this.ano;
  }

  setNombre(value) {
    console.log(this.card);
    
    this.card.nombre = value;
  }

  setNumero(value) {
    this.card.numero = value;
  }

  setCVV(value) {
    this.card.cvv = value;
  }

  setAno(value) {
    this.ano = value;
    this.setDate();
  }

  setMes(value) {
    this.mes = value;
    this.setDate();
  }

  getNombre() {
    return this.cardForm.get('nombreForm').value;
  }

  getNumero() {
    return this.cardForm.get('numeroForm').value;
  }

  getCVV() {
    return this.cardForm.get('cvvForm').value;
  }

  getAno() {
    return this.cardForm.get('anoForm').value;
  }

  getMes() {
    return this.cardForm.get('mesForm').value;
  }

  createListeners() {
    this.cardForm.statusChanges.subscribe(status => {
      this.setNombre(this.getNombre());
      this.setNumero(this.getNumero());
      this.setCVV(this.getCVV());
      this.setAno(this.getAno());
      this.setMes(this.getMes());
      
      this.cardChange.emit( this.card );

      console.log(this.card);
      

      this.validEvent.emit(status !== 'INVALID' && isVisaCard(this.card.numero) );
    });
  }
}
