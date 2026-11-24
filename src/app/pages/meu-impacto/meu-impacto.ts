import { Component } from '@angular/core';
import { ItemService } from '../../services/item';

@Component({
  selector: 'app-meu-impacto',
  imports: [],
  templateUrl: './meu-impacto.html',
  styleUrl: './meu-impacto.css',
})
export class MeuImpacto {
  constructor(public itemService: ItemService) {}

  get totalItens() {
    return this.itemService.itens.length;
  }

  get disponiveis() {
    return this.itemService.itens.filter((item) => item.status === 'Disponível').length;
  }

  get doados() {
    return this.itemService.itens.filter((item) => item.status === 'Doado').length;
  }

  get trocados() {
    return this.itemService.itens.filter((item) => item.status === 'Trocado').length;
  }
}
