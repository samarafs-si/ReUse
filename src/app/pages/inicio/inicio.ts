import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemService, Item } from '../../services/item';
import { ItemCard } from '../../components/item-card/item-card';

@Component({
  selector: 'app-inicio',
  imports: [FormsModule, ItemCard],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  nome = '';
  categoria = '';
  descricao = '';
  modalidade: 'Doação' | 'Troca' = 'Doação';

  constructor(public itemService: ItemService) {}

  cadastrarItem() {
    if (!this.nome.trim() || !this.categoria || !this.descricao.trim()) {
      alert('Preencha todos os campos!');
      return;
    }

    const novoItem: Item = {
      id: Date.now(),
      nome: this.nome,
      categoria: this.categoria,
      descricao: this.descricao,
      modalidade: this.modalidade,
      status: 'Disponível',
    };

    this.itemService.adicionarItem(novoItem);

    this.nome = '';
    this.categoria = '';
    this.descricao = '';
    this.modalidade = 'Doação';

    alert('Item cadastrado com sucesso!');
  }
  alterarStatus(evento: { id: number; status: Item['status'] }) {
    this.itemService.atualizarStatus(evento.id, evento.status);
  }

  excluirItem(id: number) {
    this.itemService.removerItem(id);
  }
}
