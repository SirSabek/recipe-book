import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Component, Input } from '@angular/core';
import { Recipe } from '../Recipe.Model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {

  @Input() receivedRecipe! : Recipe;

  constructor(private shoppingListService:ShoppingListService) { }

  onShoppingListClicked(){
    this.shoppingListService.addIngredients(this.receivedRecipe.ingredients);
  }

}
