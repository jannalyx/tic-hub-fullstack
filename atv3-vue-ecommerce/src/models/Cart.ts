import type { Product } from "./Product"
import type { CartItem } from "./CartItem"

export class Cart {

  private items: CartItem[] = []

  addItem(product: Product, quantity: number) {

    const existingItem = this.items.find(
      item => item.product.id === product.id
    )

    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      this.items.push({
        product,
        quantity
      })
    }
  }

  getItems(): CartItem[] {
    return this.items
  }

  getTotalItems(): number {
    return this.items.reduce(
      (total, item) => total + item.quantity,
      0
    )
  }

  getFinalPrice(): number {
    return this.items.reduce(
      (total, item) =>
        total + item.product.price * item.quantity,
      0
    )
  }
}