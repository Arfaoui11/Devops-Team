import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ProductsComponent} from "./products/products.component";
import {StockComponent} from "./stock/stock.component";
import {ReglementComponent} from "./reglement/reglement.component";
import {SecteurActiviteComponent} from "./secteur-activite/secteur-activite.component";
import {OperateurComponent} from "./operateur/operateur.component";
import {FactureComponent} from "./facture/facture.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {AppRoutingModule} from "./app-routing.module";
import { NgbModal, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    StockComponent,
    ReglementComponent,
    SecteurActiviteComponent,
    OperateurComponent,
    FactureComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModalModule,
    RouterModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
