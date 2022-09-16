import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { jsPDF } from "jspdf";
import { ProdutoModel } from 'src/app/models/produto/produto.model';
import { ProdutoService } from 'src/app/models/produto/produto.service';

@Component({
  selector: 'app-dialog-views',
  templateUrl: './dialog-views.component.html',
  styleUrls: ['./dialog-views.component.scss']
})


export class DialogViewsComponent implements OnInit {
  [x: string]: any;

  produto: ProdutoModel = {} as ProdutoModel

  


  constructor(public dialogRef: MatDialogRef<DialogViewsComponent>,
    private produtoService: ProdutoService,

    @Inject(MAT_DIALOG_DATA) public data: any,) { }


  ngOnInit(): void {
    this.produto = this.data.produto
  
  }




  imprimir() {
    const doc = new jsPDF();
    doc.text(`
     ${this.produto.nome}
     ${this.produto.valorCompra} 
     ${this.produto.valorVenda}
     ${this.produto.estoque} `, 10, 10);
    doc.save("produto.pdf"); // will save the file in the current working directory
  }
  


}
