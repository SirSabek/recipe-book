import { Injectable } from "@angular/core";
import { Recipe } from "./Recipe.Model";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [new Recipe(
        1,
        'test rec', 
        'this is a test', 
        'https://www.foodandwine.com/thmb/tAS-x_IC4ss1cb9EdDpsr0UExdM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bucatini-with-mushroom-ragu-dandelion-greens-and-tarragon-FT-RECIPE0421-3a5f0d29f7264f5e9952d4a3a51f5f58.jpg',
        [new Ingredient('test', 1), new Ingredient('test2', 2)]),
        new Recipe(
        2,
        'test2',
        'test2',
        'https://www.foodandwine.com/thmb/tAS-x_IC4ss1cb9EdDpsr0UExdM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bucatini-with-mushroom-ragu-dandelion-greens-and-tarragon-FT-RECIPE0421-3a5f0d29f7264f5e9952d4a3a51f5f58.jpg',
        [new Ingredient('test3', 3), new Ingredient('test4', 4)]) 
   ];

    getRecipes() {
         return this.recipes.slice();
    }

    getRecipeById(index: number){
        // return this.recipes.find(x => x.id == id) as Recipe;
        return this.recipes.slice()[index];
    }


}