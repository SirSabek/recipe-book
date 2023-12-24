import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    private ingredients : Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient : Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        ingredients.forEach(ingredient => {
            const existingIngredient = this.ingredients.find(i => i.name === ingredient.name);
            if (existingIngredient) {
                existingIngredient.amount += ingredient.amount;
            } else {
                this.ingredients.push(ingredient);
            }
        });
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}

 