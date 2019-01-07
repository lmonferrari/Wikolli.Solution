import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'WikolliApp/app/services/data.service';
import { Composicao } from 'WikolliApp/app/models/composicao';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-composicao',
  templateUrl: './composicao.component.html',
  styleUrls: ['./composicao.component.css']
})
export class ComposicaoComponent implements OnInit {
  @Input() composicao: Composicao;

  id: any = 0;
  quantity = "";

  constructor(private route: ActivatedRoute, private data: DataService, private router: Router) {

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });
  }

  ngOnInit() {
    this.getComposicao();
  }

  getComposicao(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });  

    //const id = +this.route.snapshot.paramMap.get('id');

    this.data.procuraComposicao(this.id).subscribe(composicao => this.composicao = composicao);
  }

  update(value) {
    
  }
}
