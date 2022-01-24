import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { productSalesMulti } from 'src/data/products';
import { IDespesa } from '../despesa/despesa';
import { DespesaService } from '../services/despesa.service';

@Component({
  selector: 'app-bar-charts',
  templateUrl: './bar-charts.component.html',
  styleUrls: ['./bar-charts.component.css']
})
export class BarChartsComponent implements OnInit {

  productSales: any[] = []; 
  despesas = <IDespesa[]>{};
  productSalesMulti: any[] = [];
  view: any[1000] = [700];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Valor';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  http: any;
  

  constructor(private service: DespesaService) {Object.assign(this,{ productSalesMulti}) }

  ngOnInit(): void {
    // this.createParkPoints();
    
  }

  onSelect(event: any) {
    
  }

  loadAllParkings() {
    return this.service.list().pipe( 

    );
}
  createParkPoints () {
    
    this.loadAllParkings().subscribe((despesas: IDespesa[]) => {
        despesas.map(elem => this.productSales.push({name: elem.nome, series: [{name: elem.created_at, value: elem.valor}]}));   
        this.productSalesMulti = this.productSales;
    });
  }
}
