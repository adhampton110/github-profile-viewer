<script>
    export default {
        name: "Content",
        data () {
            return {   
                avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
                followers_url: "https://api.github.com/users/octocat/followers",
                login: "adhampton110",
                url: "https://github.com/adhampton110",
                repo_url: "https://api.github.com/users/adhampton110/repos",
            }
        }
    }
</script>



<template>
    <img alt="user image" :src="avatar_url"/>
    <h3> {{ login }}</h3>
    <h3> {{ url }}</h3>
    <h3> {{ followers_url }}</h3>
    <h3> {{ repo_url }}</h3>
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
