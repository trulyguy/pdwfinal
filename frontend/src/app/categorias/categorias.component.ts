import { Component, OnInit, TemplateRef } from '@angular/core';
import { CategoriasService } from '../services/categorias.service';
import { ICategoria} from './categorias';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  public categorias = <ICategoria[]>{};
  public selectedCategoria = <ICategoria>{};
  public modalTitle = '';
  public btnTitle = '';
  public nome= new FormControl('');
  public tipo = new FormControl('');
  modalRef?: BsModalRef;


  constructor(private service: CategoriasService, private modalService: BsModalService, private router: Router) { }


  openModal(template: TemplateRef<any>, categoria?:ICategoria) {
    if(categoria){
      this.modalTitle = 'Edit Despesa';
      this.btnTitle = 'Update'
      this.selectedCategoria = categoria;
      this.nome.setValue(categoria.nome);
      this.tipo.setValue(categoria.tipo);
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
      .subscribe(response => this.categorias=response );

  }

  delete(categorias: ICategoria){
    this.service.delete(categorias)
    .subscribe(response => this.getList());
  }

  save(){
    this.selectedCategoria.nome = this.nome.value;
    this.selectedCategoria.tipo = this.tipo.value;
  
    if(this.btnTitle == 'Update'){
      this.service.update(this.selectedCategoria)
      .subscribe(response =>{
        this.getList();
      });
     
    }else{
      this.service.add(this.selectedCategoria)
      .subscribe(response =>{
        this.getList();
      });
  
    }
  }
  
  reset (){
    this.nome.reset();
    this.tipo.reset();
  }

  seguirDespesas=  () => {
    this.router.navigate(['/despesa']);
  }

  
  seguirDashboard =  () => {
    this.router.navigate(['/dashboard']);
  }
}
