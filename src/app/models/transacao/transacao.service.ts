
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Transacao } from './transacao.model';

const API = environment.urlApi
const RECURSO = API + '/transacao'


@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

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
    return this.http.get<Transacao[]>(RECURSO);
  }

  selectById(id: string) {
    return this.http.get<Transacao[]>(RECURSO + "/" + id);
  }


  insert(obj: Transacao): Observable<Transacao> {
    return this.http.post<Transacao>(RECURSO, obj)
  }


  upadate(obj: Transacao): Observable<Transacao> {
    return this.http.put<Transacao>(RECURSO + "/" + obj.id, obj)
  }


  insertOrUpdate(obj: Transacao): Observable<Transacao> {
      if(obj && obj.id){
        return this.upadate(obj);
      }else{
        return this.insert(obj);
      }
  }


  delete(id: string) {
    return this.http.delete<Transacao>(RECURSO + "/" + id);
  }


}
