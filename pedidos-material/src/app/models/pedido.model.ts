export type StatusPedido = 'Separado' | 'Fechado' | 'Cancelado' | 'Entregue';

export interface Pedido {
  codigo: number;
  nome: string;
  valor: number;
  status: StatusPedido;
}
