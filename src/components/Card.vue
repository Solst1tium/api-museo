<template>
  <div class="anime">
    <v-container>
      <h1>Listado de animes</h1>
      <v-container fluid>
          <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-select :items="items" item-text="label" v-model="selectedGenre" @input="setSelected(selectedGenre.value)"
        return-object item-value="value" label="Selecciona un genero"></v-select>        
      </v-col>   
    </v-row>
  </v-container>
      <v-row>
        <v-col v-for="anime in animes" :key="anime.mal_id" cols="4" class="my-3">
          <v-card class="mx-auto">
            <v-img :src="anime.image_url" height="250px"></v-img>
            <v-card-title>{{ anime.title }}</v-card-title>
              <v-rating class="pl-2"
                :value="anime.score"
                :length="length"
                color="amber"
                dense
                half-increments
                readonly
                size="20"
              ></v-rating>
            <div class="grey--text ml-4"> {{anime.score}}</div>          
            <v-card-subtitle>{{ anime.synopsis }}</v-card-subtitle>
            <v-card-actions>
              <v-btn color="info" text target = "_blank" :href="anime.url">Ver detalles </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
 