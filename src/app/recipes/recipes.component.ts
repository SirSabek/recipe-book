import { Component } from '@angular/core';
import { Recipe } from './Recipe.Model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  constructor() { }

  selectedRecipe!: Recipe;
}
