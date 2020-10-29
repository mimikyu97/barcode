<template>
  <v-container>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >

    <v-text-field
      v-model="type"
      label="نوع محصول"
      id= "type"
      required
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      @click="addProductType"
      class="btn1"
    >
      ثبت نوع محصول
    </v-btn>

    <v-btn
      :disabled="!valid"
      color="error"
      @click="deleteProductType"
      class="btn2"
    >
      حذف نوع محصول
    </v-btn>

  </v-form>
  </v-container>
</template>



<script>

export default {
  data: () => ({
      valid: true,
      type: '',
      select: null,
    }),
    methods: {
      addProductType () {
        if(this.type != '' && this.type != this.productType.map(x => x)){
          this.productType.push(this.type)
          console.log(this.productType)
          this.type = ''
          this.$toastr('success', 'با موفقت ثبت شد', 'تایید')
        }
      },
      deleteProductType () {
        this.$store.dispatch('deleteProductType')
        this.type = ''
      }
    },
    computed: {
        productType() {
        return this.$store.state.productType
      }
    }
  }
</script>

<style scoped>

.btn1, .btn2 {
  width: 48%;
  margin: 2px;
}
</style>