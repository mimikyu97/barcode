<template>
  <div>
    <Form />
    <br />
    <FormOutput />
  </div> 
</template>

<script>
import Form from '../components/Form'
import FormOutput from '../components/FormOutput'

export default {
  name: "Home",
  components: {
    Form,
    FormOutput
  }
};
</script>


<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
