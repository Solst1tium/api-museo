<template>
  <v-card height="150">   
    <v-footer  absolute class="font-weight-medium" color="red darken-4">  
      <v-col class="text-center" cols="12">               
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>   
      </v-col>   
    </v-footer> 
  </v-card> 
</template>
<script>export default {  name: 'Footer'
}</script>