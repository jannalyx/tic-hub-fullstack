<template>

  <div>

    <h1>E-commerce</h1>

    <h2>Produtos</h2>

    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add-to-cart="addToCart"
    />

    <hr>

    <h2>Carrinho</h2>

    <p>Total de itens: {{ totalItems }}</p>

    <p>Preço final: R$ {{ finalPrice }}</p>

    <ul>

      <li
        v-for="item in cartItems"
        :key="item.product.id"
      >

        {{ item.product.name }} x {{ item.quantity }}

      </li>

    </ul>

  </div>

</template>

<script lang="ts">

import { defineComponent } from "vue"

import ProductCard from "./components/ProductCard.vue"

import { Cart } from "./models/Cart"

import type { Product } from "./models/Product"
import type { CartItem } from "./models/CartItem"

export default defineComponent({

  components:{
    ProductCard
  },

  data(){

    return{

      cart: new Cart(),

      products: [

        {
          id:1,
          name:"Notebook",
          price:3000,
          category:{
            id:1,
            title:"Eletrônicos"
          }
        },

        {
          id:2,
          name:"Mouse",
          price:100,
          category:{
            id:1,
            title:"Eletrônicos"
          }
        },

        {
          id:3,
          name:"Teclado",
          price:200,
          category:{
            id:1,
            title:"Eletrônicos"
          }
        }

      ] as Product[],

      cartItems: [] as CartItem[]

    }

  },

  computed:{

    totalItems():number{
      return this.cart.getTotalItems()
    },

    finalPrice():number{
      return this.cart.getFinalPrice()
    }

  },

  methods:{

    addToCart(product:Product){

      this.cart.addItem(product,1)

      this.cartItems = this.cart.getItems()

    }

  }

})

</script>