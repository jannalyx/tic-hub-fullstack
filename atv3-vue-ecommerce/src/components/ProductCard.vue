<template>

  <div class="product-card">

    <h3>{{ product.name }}</h3>

    <p>Categoria: {{ product.category.title }}</p>

    <p>Preço: R$ {{ product.price }}</p>

    <button @click="addProduct">
      Adicionar
    </button>

  </div>

</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import type { Product } from "../models/Product"

export default defineComponent({

  name: "ProductCard",

  props: {
    product: {
      type: Object as PropType<Product>,
      required: true
    }
  },

  methods: {

    addProduct() {
      this.$emit("add-to-cart", this.product)
    }

  }

})
</script>

<style>

.product-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
}

</style>