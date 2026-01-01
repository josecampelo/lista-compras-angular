import { Component } from '@angular/core';
import { ItemLista } from '../models/item-lista.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {
  listaItens: ItemLista[] = [];
  input: string = '';
  proximoId: number = 1;
  
  adicionaItem() {
    let item: ItemLista = {
      id: this.proximoId,
      nome: this.input,
      comprado: false
    };

    if (this.input.trim()) {
      this.listaItens.push(item);
    }

    this.proximoId++;
    this.input = '';
  }

  removeItem(id: number) {
    this.listaItens = this.listaItens.filter(item => item.id !== id);
  }

  limpaLista() {
    this.listaItens = [];
    this.proximoId = 1;
  }
}
