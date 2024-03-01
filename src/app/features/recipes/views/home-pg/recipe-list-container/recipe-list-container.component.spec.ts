import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListContainerComponent } from './recipe-list-container.component';

describe('RecipeListContainerComponent', () => {
  let component: RecipeListContainerComponent;
  let fixture: ComponentFixture<RecipeListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeListContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipeListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
