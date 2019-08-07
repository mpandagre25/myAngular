import { Component, OnInit, 
  ViewChild,
  ElementRef,
  Output, 
  EventEmitter} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

   @ViewChild('nameInput') nameInputRef: ElementRef;
   @ViewChild('amountInput') amountInputRef: ElementRef;

   @Output() addedIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddedIngredient(){

    const nameIngredient = this.nameInputRef.nativeElement.value ;
    const amountIngredient = this.amountInputRef.nativeElement.value ;
    const newIngredient = new Ingredient(nameIngredient,amountIngredient);
    this.addedIngredient.emit(newIngredient);

    return false;
  }

}
