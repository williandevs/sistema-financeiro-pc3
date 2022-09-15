import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogTransacaoComponent } from 'src/app/components/dialog-transacao/dialog-transacao.component';
import { PaginaPrincipalComponent } from 'src/app/components/pagina-principal/pagina-principal.component';
import { Transacao } from 'src/app/models/transacao/transacao.model';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


 


  constructor() { }


  ngOnInit(): void {
  }


  
}
