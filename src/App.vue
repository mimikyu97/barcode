<template>
  <v-app>
    <Tab />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Tab from './components/Tab'

export default {
  name: "App",
  components: {
    Tab
  },
  data: () => ({
    //
  })
};
</script>
