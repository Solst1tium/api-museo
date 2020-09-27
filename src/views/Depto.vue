<template>
  <div>
    <v-main>
    <Card :collection= collection></Card>
    </v-main>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import Card from '../components/Card.vue';
export default {
    components: {
    Card
  },
  computed: {
    ...mapState(["objects", "object", "collection"]),
    
    collection: {
      get(){
        return this.$store.state.collection
      },
      set(newValue){
        return this.$store.dispatch('cleanObject', newValue)
      }      
    }, 
  },
  methods: {
    ...mapActions(["getObjects", "getObject"]),
    cleanObject(){
      this.collection = []
    }
  },
  created() {  
    this.cleanObject()  
    this.getObjects(this.$route.params.id);  
   
  },

};
</script>
