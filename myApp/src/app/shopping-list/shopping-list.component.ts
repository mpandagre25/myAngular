import { Component, OnInit } from '@angular/core';
import {  Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[] =
   [new Ingredient("Apple",7),
  new Ingredient("Onion",15)];
  constructor() { }

  ngOnInit() {
  }

  onAddedNewIngredient(newaddedIngredient:Ingredient){

    this.ingredients.push(newaddedIngredient);
  }

}
