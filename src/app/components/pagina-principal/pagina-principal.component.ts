import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Transacao } from 'src/app/models/transacao/transacao.model';
import { TransacaoService } from 'src/app/models/transacao/transacao.service';



@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent implements OnInit {

  transacoes: Transacao[] = [];

  displayedColumns: string[] = ['id', 'createdAt', 'tipo', 'valor', 'saldo'];
  dataSource: any;

  constructor(
    private router: Router,
    private transacaoService: TransacaoService,
  ) { }

  ngOnInit() {

    let that = this;

    this.transacaoService.selectAll().subscribe(
      {
        next(transacoes){
          console.log(transacoes);
          that.dataSource = new MatTableDataSource(transacoes);
        },
        error(err){
          console.error(err);
        },
        complete(){
          console.log("requisição completa");
        }
      }
    );





  }


  navegarPara(rota: any[]){
    this.router.navigate(rota);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
