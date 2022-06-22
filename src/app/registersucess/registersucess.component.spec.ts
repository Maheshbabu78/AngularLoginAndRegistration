import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistersucessComponent } from './registersucess.component';

describe('RegistersucessComponent', () => {
  let component: RegistersucessComponent;
  let fixture: ComponentFixture<RegistersucessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistersucessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistersucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
