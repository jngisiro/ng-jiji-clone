import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { HomeComponent } from './home/home.component';
import { AdThumbComponent } from './ad-thumb/ad-thumb.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [HomeComponent, AdThumbComponent, FooterComponent],
  imports: [
    CommonModule,
    CatalogueRoutingModule
  ]
})
export class CatalogueModule { }
