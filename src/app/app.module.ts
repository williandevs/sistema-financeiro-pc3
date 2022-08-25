import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';


import { MatInputModule } from '@angular/material/input';

import { MaterialExampleModule } from 'src/material.module';
import { HttpClientModule } from '@angular/common/http';


import { MatToolbarModule } from '@angular/material/toolbar';

import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [
    AppComponent,
    Pagina1Component,
    Pagina2Component,
    PaginaPrincipalComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MaterialExampleModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
