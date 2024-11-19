import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSyllabusComponent } from './add-syllabus.component';

describe('AddSyllabusComponent', () => {
  let component: AddSyllabusComponent;
  let fixture: ComponentFixture<AddSyllabusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSyllabusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
