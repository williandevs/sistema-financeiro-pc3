import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Transacao } from 'src/app/models/transacao/transacao.model';
import { TransacaoService } from 'src/app/models/transacao/transacao.service';

import { DialogMensageComponent } from '../dialog-mensage/dialog-mensage.component';
import { DialogTransacaoComponent } from '../dialog-transacao/dialog-transacao.component';



@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent implements OnInit {

  transacoes: Transacao[] = [];

  displayedColumns: string[] = ['id', 'createdAt', 'tipo', 'valor', 'saldo', 'acao'];
  dataSource: any;

  constructor(
    private router: Router,
    private transacaoService: TransacaoService,
    public dialog: MatDialog
  ) { }


  ngOnInit(): void {
    this.buscarTransacao()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();


  }



  openDialogAddTransacao(trans?: TransacaoService) {
    const dialogRef = this.dialog.open(DialogTransacaoComponent, {
      width: '1000px',
      data: { transacao: trans }

      

    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.id) {


        this.buscarTransacao();

      }

    });

  }

  deleteElement(id: number): void {

    const dialogRef = this.dialog.open(DialogMensageComponent, {

      width: '250px', data: { id }


    });
    dialogRef.afterClosed().subscribe(result => {
      this.buscarTransacao()
    }
    )
  }


  buscarTransacao() {
    let that = this;
    this.transacaoService.selectAll().subscribe({
      next(transacao) {
        that.dataSource = new MatTableDataSource(transacao)
        console.log(transacao)      
      },
      error(err) {
        console.log(err)
      },
      complete() {
        console.log("requisição completa")
      }

    });
  }

}

