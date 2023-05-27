<script>
    export default {
        name: "SearchBar",
        data () {
          return {
            username: '',
          }
        },
        methods: {
          updateUsername(event) {
            const n = event.target.value;
            this.username = n;
          }
        }
    }
</script>



<template>
    <input type="text" placeholder="Find a User" v-on:keydown.enter="updateUsername"/>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}
</style>