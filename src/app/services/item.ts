import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface Item {
  id: number;
  nome: string;
  categoria: string;
  descricao: string;
  modalidade: 'Doação' | 'Troca';
  status: 'Disponível' | 'Doado' | 'Trocado';
}

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  itens: Item[] = [];

  private navegador: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.navegador = isPlatformBrowser(platformId);

    if (this.navegador) {
      this.carregarItens();
    }
  }

  // Carrega os itens quando a aplicação abre no navegador
  carregarItens() {
    if (!this.navegador) return;

    const dadosSalvos = localStorage.getItem('reuse-itens');

    if (dadosSalvos) {
      this.itens = JSON.parse(dadosSalvos);
    }
  }

  // Salva os itens no armazenamento do navegador
  salvarItens() {
    if (!this.navegador) return;

    localStorage.setItem('reuse-itens', JSON.stringify(this.itens));
  }

  // Adiciona um novo objeto
  adicionarItem(item: Item) {
    this.itens.push(item);
    this.salvarItens();
  }

  // Atualiza a situação do objeto
  atualizarStatus(id: number, status: Item['status']) {
    const item = this.itens.find((item) => item.id === id);

    if (item) {
      item.status = status;
      this.salvarItens();
    }
  }

  // Remove um objeto da lista
  removerItem(id: number) {
    this.itens = this.itens.filter((item) => item.id !== id);
    this.salvarItens();
  }
}
