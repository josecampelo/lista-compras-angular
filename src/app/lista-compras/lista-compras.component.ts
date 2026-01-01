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
  
  adicionaItem() {
    let item: ItemLista = {
      id: this.listaItens.length + 1,
      nome: this.input,
      comprado: false
    };

    if (this.input.trim()) {
      this.listaItens.push(item);
    }

    this.input = '';
  }

  limpaLista() {
    this.listaItens = [];
  }
}
