<template>
  <v-card
    class="mx-auto"
    max-width="50vh"
    v-show="show"
  >
    <v-card-text>
      <h3>مشخصات محصول ثبت شده</h3>
      <ul v-for="(value, name) in showLast" :key="value">
        <li> {{name|farsi}} : {{value}} </li>
      </ul>
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  data () {
    return {
      show: false
    }
  },
  computed: {
    showLast () {
      return this.$store.getters.showLast[this.$store.getters.showLast.length-1]
    }
  },
  filters: {
    farsi: function(name){
      if(name == 'barcode') return 'بارکد'
      else return (name == 'productName' ? 'نام محصول' : 'نوع محصول')
    }
  },
  watch: {
    showLast: function () {
      this.show = true
      console.log(this.showLast)
    }
  }
}
</script>

<style scoped>
h3{
  text-align: center;
  padding: 5px;
  margin: 10px;
}
li{
  list-style-type: none;
  padding: 15px;
}
</style>