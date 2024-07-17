import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReporteCuentasPage } from './reporte-cuentas.page';

describe('ReporteCuentasPage', () => {
  let component: ReporteCuentasPage;
  let fixture: ComponentFixture<ReporteCuentasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteCuentasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
