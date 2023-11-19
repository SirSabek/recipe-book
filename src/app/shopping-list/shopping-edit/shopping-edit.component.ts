import { Component, ElementRef, Output, ViewChild, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('nameInput') nameInput! : ElementRef;
  @ViewChild('amountInput') amountInput! : ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  onAddValues(){
    this.ingredientAdded.emit(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
  }
}
