import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  for(const {menu} of [
    { menu: 'shop'},
    { menu: 'newstand' },
    { menu: 'who-we-are' },
    { menu: 'my-profile' },
  ]) {
    it(`should render ${menu}`, () => {
      const element: HTMLElement = fixture.nativeElement;
      const button = element.querySelector(`[data-menu="${menu}"]`);
      expect(button).toBeTruthy();
      expect(button?.textContent).toBeTruthy();
    });
  }
});
