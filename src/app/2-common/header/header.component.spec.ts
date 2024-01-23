import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the company name "World Peas"', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('span.company')?.textContent)
      .toContain('World Peas');
  });

  it('should display the menus', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const result = compiled.querySelector('app-menu');

    expect(result).toBeTruthy();
  });
});
