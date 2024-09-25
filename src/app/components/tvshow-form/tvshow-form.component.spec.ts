import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowFormComponent } from './tvshow-form.component';

describe('TvshowFormComponent', () => {
  let component: TvshowFormComponent;
  let fixture: ComponentFixture<TvshowFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TvshowFormComponent]
    });
    fixture = TestBed.createComponent(TvshowFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
