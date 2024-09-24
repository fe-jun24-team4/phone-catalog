import { OrderItem } from '../types/OrderItem';

export function calculateOrderTotal(order: OrderItem[]) {
  return order.reduce((total, { product, amount }) => total + product.price * amount, 0);
}
