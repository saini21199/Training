import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { StructuredirectiveComponent } from './structuredirective/structuredirective.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    StructuredirectiveComponent,
    PurchaseComponent,
    PurchaseOrderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
