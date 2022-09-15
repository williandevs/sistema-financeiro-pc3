import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { ProdutoModel } from './produto.model';



const API = environment.urlApi
const RECURSO = API + '/produto'


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient,
    private snackBar: MatSnackBar) { }

  showMensage(msg: string): void {
    this.snackBar.open(msg, "x", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }



  selectAll() {
    return this.http.get<ProdutoModel[]>(RECURSO);
  }

  selectById(id: string) {
    return this.http.get<ProdutoModel[]>(RECURSO + "/" + id);
  }


  insert(product: ProdutoModel): Observable<ProdutoModel> {
    return this.http.post<ProdutoModel>(RECURSO, product)
  }

  upadate(product: ProdutoModel): Observable<ProdutoModel> {
    return this.http.put<ProdutoModel>(RECURSO + "/" + product.id, product)
  }



  delete(id: string) {
    return this.http.delete<ProdutoModel>(RECURSO + "/" + id);
  }
}
