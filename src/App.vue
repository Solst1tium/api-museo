<template>
  <v-app>
    <navbarcomp/>
    <v-main>
     <router-view></router-view>
    </v-main>
     <footercomp/>
  </v-app>
</template>

<script>

import footercomp from './components/Footer';
import navbarcomp from './components/NavBar';

export default {
  name: 'App',

  components: {
    footercomp,
    navbarcomp
  },

  data: () => ({
    //
  }),
};
</script>
