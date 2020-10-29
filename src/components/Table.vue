<template>
  <v-container>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label=" جست‌وجوی محصول"
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="products"
        :search="search"
        hide-default-footer
      ></v-data-table>
    </v-card>
  </v-container>
</template>
<script>

  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            sortable: false,
          },
          { text: 'نام محصول', value: 'productName' },
          { text: 'نوع محصول', value: 'productType' },
          { text: 'بارکد محصول', value: 'barcode' },
        ]
      }
    },
    computed: {
      products() {
        return this.$store.state.products
      }
    },
    methods: {
      delete: function() {

      }
    }
  }
</script>