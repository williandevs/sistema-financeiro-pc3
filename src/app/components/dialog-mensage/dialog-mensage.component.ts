import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProdutoService } from 'src/app/models/produto/produto.service';



@Component({
  selector: 'app-dialog-mensage',
  templateUrl: './dialog-mensage.component.html',
  styleUrls: ['./dialog-mensage.component.scss']
})
export class DialogMensageComponent implements OnInit {

  

  constructor( 
    public dialogRef: MatDialogRef<DialogMensageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private produtoService: ProdutoService

  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }



 ngOnInit(): void {
    console.log(this.data)
  }


  sim(){
    let that = this;
    this.produtoService.selectAll().subscribe(
      {
        next(produto) {
          that.dialogRef.close(produto)
         
        },
        error(err) {
          console.error(err);
        },
        complete() {
          console.log("delete Complete");
        }
      }
    );

  }

  nao(){
    this.dialogRef.close();
  }




}
 



