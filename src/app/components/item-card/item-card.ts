import { Component, input, output } from '@angular/core';
import { Item } from '../../services/item';

@Component({
  selector: 'app-item-card',
  imports: [],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css',
})
export class ItemCard {
  item = input.required<Item>();

  statusAlterado = output<{
    id: number;
    status: Item['status'];
  }>();

  removido = output<number>();

  marcarComoDoado() {
    this.statusAlterado.emit({
      id: this.item().id,
      status: 'Doado',
    });
  }

  marcarComoTrocado() {
    this.statusAlterado.emit({
      id: this.item().id,
      status: 'Trocado',
    });
  }

  excluir() {
    this.removido.emit(this.item().id);
  }
}
