import { Component, OnInit } from '@angular/core';
import { productSalesMulti } from 'src/data/products';
import { IDespesa } from '../despesa/despesa';
import { DespesaService } from '../services/despesa.service';

@Component({
  selector: 'app-donut-graph',
  templateUrl: './donut-graph.component.html',
  styleUrls: ['./donut-graph.component.css']
})
export class DonutGraphComponent implements OnInit {

  productSales: any[] = [];
  productSalesMulti: any[] = [];
  view: any[1000] = [700];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Tipo de Despesa';
  showYAxisLabel = true;
  yAxisLabel = 'Valor';

  constructor(private service: DespesaService) {Object.assign(this,{ productSalesMulti})}

  ngOnInit(): void {
    this.createParkPoints();
  }

  onSelect(event: any) {
    
  }

  loadAllParkings() {
    return this.service.list().pipe( 
  
    );
  }

  createParkPoints () {
    
    this.loadAllParkings().subscribe((despesas: IDespesa[]) => {
        despesas.map(elem => this.productSales.push({name: elem.nome, value: elem.valor}));
        this.productSalesMulti = this.productSales;
    });
  }
}
