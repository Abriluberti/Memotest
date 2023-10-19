import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SplahPage } from './splah.page';

describe('SplahPage', () => {
  let component: SplahPage;
  let fixture: ComponentFixture<SplahPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SplahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
