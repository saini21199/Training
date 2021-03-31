import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Data Binding";
  showDataBindingDemo = true;
  showDirectiveDemo = false;


  showdbdemo(): void {
    this.showDataBindingDemo = true;
    this.showDirectiveDemo = false;
    this.title="Data Binding"
  }

  showdirectivedemo(): void {
    this.showDirectiveDemo = true;
    this.showDataBindingDemo = false;
    
    this.title="Displaying products using directive"

  }

}
