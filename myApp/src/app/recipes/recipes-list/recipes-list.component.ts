import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  
  @Output() recipeWasSelected = new EventEmitter<Recipes>();
  
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipes){
    this.recipeWasSelected.emit(recipe);
  }
  recipes :Recipes[]=[
    new Recipes("test1","test decriptions","https://www.kannammacooks.com/wp-content/uploads/2014/11/South-indian-style-chettinad-urlai-roast-potato-roast-recipe-1-3.jpg"),
    new Recipes("test 2","test 2 decriptions","https://www.kannammacooks.com/wp-content/uploads/2014/11/South-indian-style-chettinad-urlai-roast-potato-roast-recipe-1-3.jpg")
  ];

}
