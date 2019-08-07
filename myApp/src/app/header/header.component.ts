import { Component, 
  OnInit, 
  Output,
   EventEmitter 
  } 
from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

 @Output('featureSelected') featureSelected = new EventEmitter<string>();

  ngOnInit() {
  }

  onSelect(feature:string){
    this.featureSelected.emit(feature);
  }

}
