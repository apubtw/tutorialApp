import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TutorialListPage } from './tutorial-list.page';

describe('TutorialListPage', () => {
  let component: TutorialListPage;
  let fixture: ComponentFixture<TutorialListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
