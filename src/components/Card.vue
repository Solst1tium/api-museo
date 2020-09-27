<template>
  <div>
    <v-container>
      <h1>Listado de Obras</h1>    
      <v-row>
        <v-col v-for="collect in collection" :key="collect.objectID" cols="4" class="my-3">
          <v-card class="mx-auto">
            <v-img :src="collect.primaryImage" height="250px"></v-img>
            <v-card-title>{{ collect.title }}</v-card-title>               
            <v-card-subtitle>{{ collect.artistDisplayName}}</v-card-subtitle>
            <v-card-actions>
              <v-btn color="info" text target = "_blank" :href="collect.objectURL">Ver detalles </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {//recibir!!!
    title: String,
    collection: Array
  },

}
</script>
 