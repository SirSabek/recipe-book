import { Component, Input } from '@angular/core';
import { Recipe } from '../Recipe.Model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {

  @Input() receivedRecipe! : Recipe;

}
