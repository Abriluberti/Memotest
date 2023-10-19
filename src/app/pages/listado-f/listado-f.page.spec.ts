import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoFPage } from './listado-f.page';

describe('ListadoFPage', () => {
  let component: ListadoFPage;
  let fixture: ComponentFixture<ListadoFPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListadoFPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
