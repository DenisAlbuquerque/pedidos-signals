import { Component, inject, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Pedido } from '../../../models/pedido.model';
import { PedidoService } from '../../../services/pedido.service';

@Component({
  selector: 'app-pedido-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './pedido-form.component.html'
})
export class PedidoFormComponent {
  private fb = inject(FormBuilder);
  private pedidosService = inject(PedidoService);

  @Input() pedidoEdit?: Pedido;

  form = this.fb.group({
    codigo: [0, Validators.required],
    nome: ['', Validators.required],
    valor: [0, Validators.required],
    status: ['separado', Validators.required]
  });

  ngOnInit() {
    if (this.pedidoEdit) {
      this.form.patchValue(this.pedidoEdit);
    }
  }

  salvar() {
    const pedido = this.form.value as Pedido;
    if (this.pedidoEdit) {
      this.pedidosService.updatePedido(pedido.codigo, pedido);
    } else {
      this.pedidosService.addPedido(pedido);
    }
    this.form.reset({ codigo: 0, nome: '', valor: 0, status: 'separado' });
  }
}
