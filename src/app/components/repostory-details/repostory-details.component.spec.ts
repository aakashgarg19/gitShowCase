import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepostoryDetailsComponent } from './repostory-details.component';

describe('RepostoryDetailsComponent', () => {
  let component: RepostoryDetailsComponent;
  let fixture: ComponentFixture<RepostoryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepostoryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepostoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
