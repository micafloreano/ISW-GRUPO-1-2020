import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoComponentComponent } from './pedido-component.component';

describe('PedidoComponentComponent', () => {
  let component: PedidoComponentComponent;
  let fixture: ComponentFixture<PedidoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
