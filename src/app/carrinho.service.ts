import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produto';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens :IProdutoCarrinho[]=[];
  constructor() { }
  
  obtemCarrinho(){
    this.itens= JSON.parse(localStorage.getItem("carrinho")||"[]");
    return this.itens;
   
  }
  adicionarAoCarrinho(produto:IProdutoCarrinho){
      this.itens.push(produto);
      localStorage.setItem("carrinho",JSON.stringify(this.itens));
  }
  removerItemCarrinho(productId: Number){
    this.itens = this.itens.filter(intem=>intem.id != productId);
    localStorage.setItem("carrinho",JSON.stringify(this.itens));

  }
  limparCarrinho(){
    this.itens =[];
    localStorage.clear();
  }
}
