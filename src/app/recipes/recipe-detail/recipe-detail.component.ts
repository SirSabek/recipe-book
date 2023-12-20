import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Component, Injectable, Input } from '@angular/core';
import { Recipe } from '../Recipe.Model';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

@Injectable()
export class RecipeDetailComponent {

  receivedRecipe!: Recipe;
  id!: number;

  constructor(private shoppingListService: ShoppingListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute)
  { }

  onShoppingListClicked(){
    this.shoppingListService.addIngredients(this.receivedRecipe.ingredients);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.receivedRecipe = this.recipeService.getRecipeById(this.id);
    });

  }

 
}
