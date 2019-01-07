import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Produto } from 'WikolliApp/app/models/produto';
import { DataService } from 'WikolliApp/app/services/data.service';
import { Composicao } from 'WikolliApp/app/models/composicao';

@Component({
  selector: 'app-produto-procura',
  templateUrl: './produto-procura.component.html',
  styleUrls: ['./produto-procura.component.css']
})
export class ProdutoProcuraComponent implements OnInit {

  produtos$: Observable<Produto[]>;
  composicao: Composicao;
  private searchTerms = new Subject<String>();

  constructor(private data: DataService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.produtos$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.data.procuraProduto(term)),
    );
  }
}
