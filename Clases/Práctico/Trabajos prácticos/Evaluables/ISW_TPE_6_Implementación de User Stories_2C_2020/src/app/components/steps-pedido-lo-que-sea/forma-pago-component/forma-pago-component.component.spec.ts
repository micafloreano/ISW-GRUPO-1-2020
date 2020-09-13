import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaPagoComponentComponent } from './forma-pago-component.component';

describe('FormaPagoComponentComponent', () => {
  let component: FormaPagoComponentComponent;
  let fixture: ComponentFixture<FormaPagoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormaPagoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaPagoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
