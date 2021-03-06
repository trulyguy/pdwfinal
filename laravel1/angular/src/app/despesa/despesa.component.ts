import { Component, OnInit, TemplateRef } from '@angular/core';
import { DespesaService } from '../services/despesa.service';
import { IDespesa } from './despesa';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-despesa',
  templateUrl: './despesa.component.html',
  styleUrls: ['./despesa.component.scss']
})
export class DespesaComponent implements OnInit {

  public despesas = <IDespesa[]>{};
  public selectedDespesa = <IDespesa>{};
  public modalTitle = '';
  public btnTitle = '';
  public nome = new FormControl('');
  public valor = new FormControl('');
  public tipo = new FormControl('');
  modalRef?: BsModalRef;

  constructor(private service:DespesaService, private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>, despesa?:IDespesa) {
    if(despesa){
      this.modalTitle = 'Edit Despesa';
      this.btnTitle = 'Update'
      this.selectedDespesa = despesa;
      this.nome.setValue(despesa.nome);
      this.valor.setValue(despesa.valor);
      this.tipo.setValue(despesa.tipo);
    }else{
      this.modalTitle= 'Add Despesa';
      this.btnTitle= 'Save';
      this.reset();
    }
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {  
    this.getList();
  }

  getList(){
    this.service.list()
    .subscribe(response => this.despesas = response);
    
  }
  delete(despesa:IDespesa){
    this.service.delete(despesa)
    .subscribe(response => this.getList());
}
save(){
  this.selectedDespesa.nome = this.nome.value;
  this.selectedDespesa.valor = this.valor.value;
  this.selectedDespesa.tipo = this.tipo.value;

  if(this.btnTitle == 'Update'){
    this.service.update(this.selectedDespesa)
    .subscribe(response =>{
      this.getList();
    });
   
  }else{
    this.service.add(this.selectedDespesa)
    .subscribe(response =>{
      this.getList();
    });

  }
}

reset (){
  this.nome.reset();
  this.valor.reset();
  this.tipo.reset();
}
}
