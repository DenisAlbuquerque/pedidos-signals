import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { PedidoService } from '../../../services/pedido.service';

@Component({
  selector: 'app-pedidos-list',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatListModule],
  templateUrl: './pedido-list.component.html'
})
export class PedidoListComponent {
  private pedidosService = inject(PedidoService);

  pedidos = this.pedidosService.pedidos;

  getPedidosPorStatus = (status?: string) =>
    computed(() =>
      status
        ? this.pedidos().filter(p => p.status === status)
        : this.pedidos()
    );

  getTotalPorStatus = (status?: string) =>
    computed(() =>
      this.getPedidosPorStatus(status)().reduce((sum, p) => sum + p.valor, 0)
    );

  contagem = (status?: string) => this.getPedidosPorStatus(status)().length;
}
