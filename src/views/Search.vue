<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" lg="3">
        <v-card class="mx-auto" max-width="400">
          <v-img
            src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/20617/43304/main-image"
            height="300px"
          ></v-img>
          <v-card-title>Artes Decorativas de América</v-card-title>
          <v-btn color="red darken-1" dark to="/depto1">Ir</v-btn>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="3">
        <v-card class="mx-auto" max-width="400">
          <v-img
            src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/322586/1629475/main-image"
            height="300px"
          ></v-img>
          <v-card-title>Artes del Oriente Medio</v-card-title>
          <v-btn color="red darken-1" dark to="/depto3">Ir</v-btn>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="3">
        <v-card class="mx-auto" max-width="400">
          <v-img
            src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/24860/60410/main-image"
            height="300px"
          ></v-img>
          <v-card-title>Armaduras y Armas</v-card-title>
          <v-btn color="red darken-1" dark to="/depto4">Ir</v-btn>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="3">
        <v-card class="mx-auto" max-width="400">
          <v-img
            src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/451441/1519576/main-image"
            height="300px"
          ></v-img>
          <v-card-title>Artes de África, Oceania y las Américas</v-card-title>
          <v-btn color="red darken-1" dark to="/depto5">Ir</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>