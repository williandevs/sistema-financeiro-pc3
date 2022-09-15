import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogProdutoComponent } from './components/dialog-produto/dialog-produto.component';

import { DialogTransacaoComponent } from './components/dialog-transacao/dialog-transacao.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';

const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent },
  { path: 'pagina1', component: Pagina1Component },
  { path: 'pagina2', component: Pagina2Component },
  { path: 'transacao', component: DialogTransacaoComponent },
  
  { path: 'produto', component: DialogProdutoComponent },
  { path: 'produto/create', component: DialogProdutoComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
