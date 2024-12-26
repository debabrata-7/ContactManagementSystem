import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConatacComponent } from './add-conatac.component';

describe('AddConatacComponent', () => {
  let component: AddConatacComponent;
  let fixture: ComponentFixture<AddConatacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddConatacComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddConatacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
