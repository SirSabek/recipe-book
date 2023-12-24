import { Component } from '@angular/core';
import { Recipe } from './Recipe.Model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent {
  selectedRecipe!: Recipe;

  constructor () {}

  ngOnInit() {
  
  }

}
