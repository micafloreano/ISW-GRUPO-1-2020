import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaEntregaComponentComponent } from './forma-entrega-component.component';

describe('FormaEntregaComponentComponent', () => {
  let component: FormaEntregaComponentComponent;
  let fixture: ComponentFixture<FormaEntregaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormaEntregaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaEntregaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
