import { Injectable, signal } from '@angular/core';
import { Pedido } from '../models/pedido.model';

@Injectable({ providedIn: 'root' })
export class PedidoService {
  
  private pedidosSig = signal<Pedido[]>([
    { codigo: 1, nome: 'Pedido 1', valor: 100, status: 'Separado' },
    { codigo: 2, nome: 'Pedido 2', valor: 200, status: 'Fechado' },
    { codigo: 3, nome: 'Pedido 3', valor: 150, status: 'Cancelado' },
    { codigo: 4, nome: 'Pedido 4', valor: 450, status: 'Entregue' },
  ]);

  private nextCodigo = 5;

  pedidos = this.pedidosSig.asReadonly();

  addPedido(pedido: Pedido) {
    this.pedidosSig.update(p => [...p, pedido]);
  }

  updatePedido(codigo: number, pedido: Pedido) {
    this.pedidosSig.update(p =>
      p.map(item => (item.codigo === codigo ? pedido : item))
    );
  }
}
