import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTitleComponent } from './item-title.component';

describe('ItemTitleComponent', () => {
  let component: ItemTitleComponent;
  let fixture: ComponentFixture<ItemTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
