<script>
import Title from './components/Title.vue';
import Content from './components/Content.vue';
export default {
  data () {
      return {   
          avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
          followers_url: "https://api.github.com/users/octocat/followers",
          login: "adhampton",
          url: "https://github.com/adhampton110",
          repo_url: "https://api.github.com/users/adhampton110/repos",
      }
  },
  components: {
    Title,
    Content,
  }
}
</script>

<template>
  <div>
    <Title/>
    <Content/>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
