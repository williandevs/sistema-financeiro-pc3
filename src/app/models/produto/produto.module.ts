import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProdutoModule {

  id!: number;
  createdAt!: string;
  updatedAt!: string;
  nome!: string;
  valorCompra!: number;
  valorVenda!: number;
  estoque!: number;
  descricao!: string;

}
