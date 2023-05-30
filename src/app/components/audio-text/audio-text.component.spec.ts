import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioTextComponent } from './audio-text.component';

describe('AudioTextComponent', () => {
  let component: AudioTextComponent;
  let fixture: ComponentFixture<AudioTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
