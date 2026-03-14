interface Category {
  id: number
  name: string
}

interface Product {
  id: number
  name: string
  price: number
  category: Category
}

enum Role {
  ADMIN = "ADMIN",
  CUSTOMER = "CUSTOMER"
}

class User {
  constructor(
    public id: number,
    public username: string,
    public email: string,
    public role: Role
  ) {}
}

interface CartItem {
  product: Product
  quantity: number
}

class Cart {
  private items: CartItem[] = []

  addItem(product: Product, quantity: number) {

    const exists = this.items.some(item => item.product.id === product.id)

    if (exists) {
      this.items.forEach(item => {
        if (item.product.id === product.id) {
          item.quantity += quantity
        }
      })
    } else {
      this.items.push({ product, quantity })
    }
  }

  getTotalItems(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0)
  }

  getFinalPrice(): number {
    return this.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    )
  }
}

const electronics: Category = {
  id: 1,
  name: "Eletrônicos"
}

const notebook: Product = {
  id: 1,
  name: "Notebook",
  price: 3000,
  category: electronics
}

const mouse: Product = {
  id: 2,
  name: "Mouse",
  price: 100,
  category: electronics
}

const cart = new Cart()

cart.addItem(notebook, 1)
cart.addItem(mouse, 2)
cart.addItem(notebook, 1)

console.log("Total de itens:", cart.getTotalItems())
console.log("Preço final:", cart.getFinalPrice())