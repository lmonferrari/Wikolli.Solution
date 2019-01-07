import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DataService } from './services/data.service';

import { AppComponent } from './app.component';
import { ComposicaoComponent } from './components/composicao/composicao.component';
import { ProdutoProcuraComponent } from './components/produto-procura/produto-procura.component';
import { PrincipalComponent } from './components/principal/principal.component';

let router = [
  {
    path: "", component: ComposicaoComponent
  },
  {
    path: "api/composicao/:id", component: ComposicaoComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ComposicaoComponent,
    ProdutoProcuraComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(router, { useHash: true, enableTracing: true, onSameUrlNavigation: "reload" })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
