import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProdutoModule } from './produto.module';


const API = environment.urlApi
const RECURSO = API + '/produto'


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    private httpClient: HttpClient
  ) { }

  selectAll() {
    return this.httpClient.get<ProdutoModule[]>(RECURSO)
  }

  /*  selecAll(){
     return [
       { id: 1, createdAt: 'dado1', updatedAt: '22/08/2022', nome: 'produto1', valorCompra: 200, valorVenda: 300, estoque: 10, descricao: 'produto de teste' },
       { id: 2, createdAt: 'dado1', updatedAt: '22/08/2022', nome: 'produto1', valorCompra: 200, valorVenda: 300, estoque: 10, descricao: 'produto de teste' },
       { id: 3, createdAt: 'dado1', updatedAt: '22/08/2022', nome: 'produto1', valorCompra: 200, valorVenda: 300, estoque: 10, descricao: 'produto de teste' },
       { id: 4, createdAt: 'dado1', updatedAt: '22/08/2022', nome: 'produto1', valorCompra: 200, valorVenda: 300, estoque: 10, descricao: 'produto de teste' },
       { id: 5, createdAt: 'dado1', updatedAt: '22/08/2022', nome: 'produto1', valorCompra: 200, valorVenda: 300, estoque: 10, descricao: 'produto de teste' },
       { id: 6, createdAt: 'dado1', updatedAt: '22/08/2022', nome: 'produto1', valorCompra: 200, valorVenda: 300, estoque: 10, descricao: 'produto de teste' },
     ] 
   } */
}
