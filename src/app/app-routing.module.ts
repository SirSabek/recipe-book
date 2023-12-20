import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";


const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: [
        { path: 'list', component: RecipeListComponent },
        { path: ':id', component: RecipeDetailComponent }
    ] },
    { path: 'shopping-list', component: ShoppingListComponent, children: [
        { path: ':id', component: ShoppingEditComponent }
    ]},
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule] // tells angular that we want to use this in other places of the app
})
export class AppRoutingModule{

}