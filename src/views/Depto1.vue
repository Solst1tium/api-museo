<template>
  <div>
    <v-main>{{ objects }}
      {{ collection }}
    </v-main>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["objects", "object", "collection"]),
  },
  methods: {
    ...mapActions(["getObjects", "getObject"]),
  },
  created() {
    this.getObjects(1);
  },
};
</script>
