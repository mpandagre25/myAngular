import { Component, 
  OnInit,
  Input, 
  Output,
  EventEmitter
  } from '@angular/core';
import { Recipes } from '../../recipes.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent implements OnInit {

  constructor() { }

 @Input() recipe :Recipes
 @Output() selectedRecipe = new EventEmitter<void>();

  ngOnInit() {
  }

  onSelected(){
    this.selectedRecipe.emit();
  }

}
