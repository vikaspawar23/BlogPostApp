import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldblogsComponent } from './oldblogs.component';

describe('OldblogsComponent', () => {
  let component: OldblogsComponent;
  let fixture: ComponentFixture<OldblogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OldblogsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OldblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
