import { Component, OnInit } from '@angular/core';
import { productSalesMulti } from 'src/data/products';
import { DespesaService } from '../services/despesa.service';
import { DespesaComponent} from '../despesa/despesa.component';
import { IDespesa } from '../despesa/despesa';

@Component({
  selector: 'app-bar-charts',
  templateUrl: './bar-charts.component.html',
  styleUrls: ['./bar-charts.component.css']
})
export class BarChartsComponent implements OnInit {
  productSales = []; 
  productSalesMulti: any[] = [];
  view: any[1000] = [700];
  public despesas =[];

  

  vehicleSurveyData = [
    {type: 'Bike', count: 105000},
    {type: 'Cars', count: 55000},
    {type: 'Trucks', count: 15000},
    {type: 'Scooter', count: 15000},
    {type: 'Bus', count: 20000}
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  

  constructor(private service:DespesaService) {Object.assign(this,{ productSalesMulti}) }

  ngOnInit(): void {

    this.despesas.push(this.getList())

    this.despesas.map(elem => this.productSales.push({name: elem.nome , value: elem.valor}));
  }

  getList(){
    this.service.list()
    .subscribe(response => this.despesas = response);
    
    
  }
  onSelect(event: any) {
    console.log(event);
  }
}


