import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterupComponent } from './counterup.component';

describe('CounterupComponent', () => {
  let component: CounterupComponent;
  let fixture: ComponentFixture<CounterupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterupComponent]
    });
    fixture = TestBed.createComponent(CounterupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
