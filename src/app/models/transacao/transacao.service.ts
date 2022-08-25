import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Transacao } from "./transacao.model";

const API = environment.urlApi;
const RECURSO = `${API}/transacao`;

@Injectable({
  providedIn: 'root'
})
export class TransacaoService{

  constructor(
    private httpClient: HttpClient
  ){}

  selectAll(){
    return this.httpClient.get<Transacao[]>(RECURSO);
  }

  

}
