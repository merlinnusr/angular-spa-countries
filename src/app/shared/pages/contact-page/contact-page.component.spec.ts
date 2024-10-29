import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPAgeComponent } from './contact-page.component';

describe('ContactPAgeComponent', () => {
  let component: ContactPAgeComponent;
  let fixture: ComponentFixture<ContactPAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactPAgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactPAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
