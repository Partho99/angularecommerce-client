import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLettersComponent } from './news-letters.component';

describe('NewsLettersComponent', () => {
  let component: NewsLettersComponent;
  let fixture: ComponentFixture<NewsLettersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsLettersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
