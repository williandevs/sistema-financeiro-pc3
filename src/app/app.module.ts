import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'src/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogMensageComponent } from './components/dialog-mensage/dialog-mensage.component';
import { DialogProdutoComponent } from './components/dialog-produto/dialog-produto.component';
import { DialogTransacaoComponent } from './components/dialog-transacao/dialog-transacao.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DialogViewsComponent } from './components/dialog-views/dialog-views.component';




@NgModule({
  declarations: [
    AppComponent,
    Pagina1Component,
    Pagina2Component,
    PaginaPrincipalComponent,
    NavbarComponent,
    FooterComponent,
    DialogTransacaoComponent,
    DialogProdutoComponent,
    DialogMensageComponent,
    DialogViewsComponent,



  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MaterialExampleModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatSnackBarModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
