import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatafilesComponent } from './datafiles.component';

describe('DatafilesComponent', () => {
  let component: DatafilesComponent;
  let fixture: ComponentFixture<DatafilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatafilesComponent]
    });
    fixture = TestBed.createComponent(DatafilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
