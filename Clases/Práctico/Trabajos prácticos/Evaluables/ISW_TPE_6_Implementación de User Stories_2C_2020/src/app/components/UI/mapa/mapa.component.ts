import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  @Input() lat;
  @Input() lng;

  @Input() latM;
  @Input() lngM

  @Output() coordenadas: EventEmitter<any>;

  constructor() {
    this.coordenadas = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public onMapReady(map) {
    map.addListener('click', (e) => {
      this.updateMarket(e.latLng.lat(), e.latLng.lng());
    });
  }

  updateMarket(lat: number, lng: number) {
    this.latM = lat;
    this.lngM = lng;

    this.coordenadas.emit( {lat: this.latM, lng: this.lngM} );
  }
}
