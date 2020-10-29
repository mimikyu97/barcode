<template>
  <div>
    
    <v-tabs
      background-color="deep-purple accent-4"
      class="elevation-2"
      dark
      grow
      centered
      hide-slider
    >

      <v-tab
        v-for="i in tabs"
        :key="i.tab"
        :to="`${i.url}`"
      >
        {{i.tab}} 
      </v-tab>

    </v-tabs>

  </div>
</template>

<script>
export default {
  data () {
      return {
        tabs: [{
          tab: 'نوع محصول',
          url: 'category'
        },
        {
          tab: 'نمایش محصولات',
          url: 'show'
        },
        {
          tab: 'ثبت محصول',
          url: '/'
        }
        ],
      }
    },
}
</script>


<style >
.v-tabs-bar__content {
  flex-wrap: nowrap;
  width: 100%;
}
</style>