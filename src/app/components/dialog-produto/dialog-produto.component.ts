import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProdutoModel } from 'src/app/models/produto/produto.model';
import { ProdutoService } from 'src/app/models/produto/produto.service';

@Component({
  selector: 'app-dialog-produto',
  templateUrl: './dialog-produto.component.html',
  styleUrls: ['./dialog-produto.component.scss']
})
export class DialogProdutoComponent implements OnInit {

  produto: ProdutoModel = {} as ProdutoModel

  nome: string = '';
  valorCompra: number = 0;
  valorVenda: number = 0;
  estoque: number = 0;


  constructor(public dialogRef: MatDialogRef<DialogProdutoComponent>,
    private produtoService: ProdutoService,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
    if (this.data && this.data.produto) {
      this.produto = this.data.produto;
      this.nome = this.produto.nome;
      this.valorCompra = this.produto.valorCompra;
      this.valorVenda = this.produto.valorVenda;
      this.estoque = this.produto.estoque;
    }


  }

  salvar() {

     let produtoObj = this.formToModel();


    let that = this;

    if (this.produto && this.produto.id) {
      

      this.produto.nome = produtoObj.nome;
      this.produto.valorCompra = produtoObj.valorCompra;
      this.produto.valorVenda = produtoObj.valorVenda;
      this.produto.estoque = produtoObj.estoque;


   this.produtoService.upadate(this.produto).subscribe(
        {
          next(produto) {
            that.dialogRef.close(produto)
          },
          error(err) {
            console.error(err);
          },
          complete() {
            console.log("update complete");
            that.produtoService.showMensage('produto salvo')
          }
        }
      );

    }else{  
      this.produtoService.insert(produtoObj).subscribe(
        {
          next(produto) {
            that.dialogRef.close(produto)
          },
          error(err) {
            console.error(err);
          },
          complete() {
            console.log("Insert Complete");
            that.produtoService.showMensage('produto salvo')
          }
        }
      );
    }

  }

  formToModel(): ProdutoModel {

    let produtoParaSalvar = {
      nome: this.nome,
      valorCompra: this.valorCompra,
      valorVenda: this.valorVenda,
      estoque: this.estoque,

    } as ProdutoModel

    return produtoParaSalvar


  }

  cancelar() {
    this.dialogRef.close('tem certeza')
  }

}
