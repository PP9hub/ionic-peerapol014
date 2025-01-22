<template>
<base-layout  :page-title="'Add a Memory'"
    :page-default-back-link="'/memories'"
    >
    <create-memory-form @save-memory="saveMemory"></create-memory-form>
  </base-layout>
</template>

<script>
import CreateMemoryForm from "../component/memories/CreateMemoryForm.vue";

export default {
  components: {
    CreateMemoryForm,
  },
  
  methods: {
    saveMemory(memoryData) {
      this.$store.dispatch('addMemory', memoryData);
      this.$router.replace('/memories');
    }
  }
};
</script>

<style>
/* Style the body */
body {
font-family: Arial;
margin: 0;
}

/* Header/Logo Title */
.header {
padding: 60px;
text-align: center;
background: #bc1a78;
color: white;
font-size: 30px;
}

/* Page Content */
.content {padding:20px;}
</style>