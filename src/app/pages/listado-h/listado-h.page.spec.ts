import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoHPage } from './listado-h.page';

describe('ListadoHPage', () => {
  let component: ListadoHPage;
  let fixture: ComponentFixture<ListadoHPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListadoHPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
