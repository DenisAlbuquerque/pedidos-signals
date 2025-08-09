import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { PedidoFormComponent } from './components/pedidos-form/pedido-form/pedido-form.component';
import { PedidoListComponent } from './components/pedidos-list/pedido-list/pedido-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatCardModule, PedidoFormComponent, PedidoListComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}
