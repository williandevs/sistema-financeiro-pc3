import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ProdutoModel } from 'src/app/models/produto/produto.model';
import { ProdutoService } from 'src/app/models/produto/produto.service';
import { DialogMensageComponent } from '../dialog-mensage/dialog-mensage.component';
import { DialogProdutoComponent } from '../dialog-produto/dialog-produto.component';
import { DialogViewsComponent } from '../dialog-views/dialog-views.component';




@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.scss']
})
export class Pagina1Component implements OnInit {

  produtos: ProdutoModel[] = [];

  displayedColumns: number | string[] = ['id', 'nome', 'valorCompra', 'valorVenda', 'estoque', 'acao'];
  dataSource: any;


  constructor(private produtoService: ProdutoService,
    public dialog: MatDialog,public dialoging: MatDialog) { }



  ngOnInit(): void {
    this.buscarTodosProdutos()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();


  }



  openDialogAddProduto(prod?: ProdutoModel) {
    const dialogRef = this.dialog.open(DialogProdutoComponent, {
      width: '1000px',
      data: { produto: prod }

    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.id) {

        this.buscarTodosProdutos();

      }

    });

  }


  openViewsDialog() {
    const dialogRef = this.dialog.open(DialogViewsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      
      
    });
  }


  deleteElement(id: number): void {

    const dialogRef = this.dialog.open(DialogMensageComponent, {

      width: '250px', data: { id }


    });
    dialogRef.afterClosed().subscribe(result => {
      this.buscarTodosProdutos()
    }
    )
  }


  buscarTodosProdutos() {
    let that = this;
    this.produtoService.selectAll().subscribe({
      next(produto) {
        that.dataSource = new MatTableDataSource(produto)
        console.log(produto)
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

