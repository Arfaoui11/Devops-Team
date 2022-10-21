import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SecteurActiviteComponent} from "./secteur-activite/secteur-activite.component";
import {OperateurComponent} from "./operateur/operateur.component";
import {FactureComponent} from "./facture/facture.component";
import {StockComponent} from "./stock/stock.component";
import {ProductsComponent} from "./products/products.component";
import {ReglementComponent} from "./reglement/reglement.component";


const routes: Routes =[
  { path: 'secteurActivite',  component: SecteurActiviteComponent },
  { path: 'operateur',  component: OperateurComponent },
  { path: 'facture',  component: FactureComponent },
  { path: 'product',  component: ProductsComponent },
  { path: 'stock',  component: StockComponent },
  { path: 'reglement',  component: ReglementComponent },
  {path: '', redirectTo: 'product', pathMatch: 'full'}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
