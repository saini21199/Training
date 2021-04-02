import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { StructuredirectiveComponent } from './structuredirective/structuredirective.component';

const routes: Routes = [
    // {
    //      path: '',
    //      component: AppComponent
    //  },
    {
    path: 'data-binding',
    component : ImageComponent
  },
  {
    path: 'structural-directive',
    component : StructuredirectiveComponent
  },
  {
    path: 'purchase',
    component : PurchaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }