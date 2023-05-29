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
            this.$emit("updateEvent", this.username);
          }
        }
    }
</script>



<template>
    <input type="text" placeholder="Enter a GitHub username..." v-on:keydown.enter="updateUsername"/>
</template>

<style scoped>
input {
  background-color: #272530;
  border: 2px solid #161b22;
  border-radius: 5px;
  outline: none;
  height: 100%;
  width: 25%;
  padding: 0.8rem;
  margin-top: 20px;
  color:#FFF
}

</style>