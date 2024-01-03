import { Component } from '@angular/core';
import { Recipe } from '../Recipe.Model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent { 
  recipes!: Recipe[];
  private subscription!: Subscription

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipeChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
