<template>
  <v-container>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >

    <v-text-field
      v-model="name"
      id="name"
      label="نام محصول"
      required
    ></v-text-field>
    
    <v-combobox
    v-model="type"
    :items="productType"
    id="type"
    label="نوع محصول را وارد کنید"
    ></v-combobox>

    <v-btn
      :disabled="!valid"
      color="success"
      @click="addProductType"
      block
    >
      ثبت محصول
    </v-btn>

  </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
      valid: true,
      name: '',
      type: null,
    }),
    methods: {
      addProductType () {
        if(this.type != null && this.productType.map(x => x != this.type)){
          this.productType.push(this.type)
        }
        if(this.name != '' && this.type != null){
          this.$store.state.products.push({
            productName: this.name,
            productType: this.type,
            barcode: 1000 + this.productType.indexOf(this.type) + "" + Math.floor(Math.random() * 100000000)
          })
          this.name = '';
          this.type = '';
          this.$toastr('success', 'با موفقت ثبت شد', 'تایید')
        }else {
          this.$toastr('error', 'مشکلی در ثبت اطلاعات وجود دارد', 'خطا')
        } 
      },
    },
    computed: {
      productType() {
        return this.$store.state.productType
      }
    }
  }
</script>