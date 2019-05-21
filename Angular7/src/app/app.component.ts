import { Component } from '@angular/core';

export class Pessoa{
  id : number;
  nome : string;
  fone : string;
}

const PessoaArray : Pessoa[] = [
  {id:1,nome:"Robson",fone:"999874894"},
  {id:2,nome:"João",fone:"945214894"},
  {id:3,nome:"Maria",fone:"999873658"},
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pessoaCollection = PessoaArray;

  selectedPessoa : Pessoa = {id:0,nome:"",fone:""};

  OpenForEdit(pessoa : Pessoa) : void {
    this.selectedPessoa = pessoa;
  }

  AddOrEdit() : void{
    if(this.selectedPessoa.id == 0) // Inserir
    {
      this.selectedPessoa.id = Math.max.apply(Math,this.pessoaCollection.map(function(x){return x.id;}))+1;
      this.pessoaCollection.push(this.selectedPessoa);
    }
    this.selectedPessoa = {id:0,nome:"",fone:""};
  }

  Delete() : void{
    this.pessoaCollection = this.pessoaCollection.filter(x => x != this.selectedPessoa);
    this.selectedPessoa = {id:0,nome:"",fone:""};
  }
}
