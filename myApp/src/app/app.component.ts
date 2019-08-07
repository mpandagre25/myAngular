import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OnlineRecipe';

  loadedFeature: boolean=false;

  onNavigate(feature:string){
    if(feature=== 'recipes'){
      this.loadedFeature=true;
    }
    else{
      this.loadedFeature=false;
    }

  }
}
