import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Produto } from '../models/produto';
import { Composicao } from '../models/composicao';

import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public produtos: Produto[];
  public composicoes: Composicao[];
  public composicao: Composicao;

  private produtoUrl = "/api/produto";
  private composicaoUrl  = "/api/composicao"

  constructor(private http: HttpClient) { }

  carregarProdutos(): Observable<Produto[]>{
    return this.http.get(this.produtoUrl)
      .map((data: Produto[]) => {
          return data;
      });
  }

  procuraProduto(term: string): Observable<Produto[]> {
    if (!term.trim) return of([]);

    return this.http.get(`${this.produtoUrl}/pro_descricao/${term}`)
      .map((data: Produto[]) => {
        return data;
      });
  }

  carregarComposicao(): Observable<Composicao[]> {
    return this.http.get(this.composicaoUrl)
      .map((data: Composicao[]) => {
        return data;
      });
  }

  procuraComposicao(term: number): Observable<Composicao> {
    return this.http.get(`${this.composicaoUrl}/${term}`)
      .map((data: Composicao) => {
        return data;
      }); 
  }
}
