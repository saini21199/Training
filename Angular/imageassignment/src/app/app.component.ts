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
  showPurchaseDemo=false;

  showdbdemo(): void {
    this.showDataBindingDemo = true;
    this.showDirectiveDemo = false;
    this.title="Data Binding"
    this.showPurchaseDemo=false;
  }

  showdirectivedemo(): void {
    this.showDirectiveDemo = true;
    this.showDataBindingDemo = false;
    this.showPurchaseDemo=false;
    this.title="Displaying products using directive"

  }

  showpurchasedemo() : void{
    this.showDirectiveDemo = false;
    this.showDataBindingDemo = false;
    this.showPurchaseDemo=true;
    this.title="Displaying Purchase component"
  }
 
 

}
