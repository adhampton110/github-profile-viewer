<script>
import Title from './components/Title.vue';
import Content from './components/Content.vue';
import SearchBar from './components/SearchBar.vue';
export default {
  components: {
    Title,
    Content,
    SearchBar,
  },
  data () {
    return {
      username: "",
      userData: {},
      userRepositories: null,
    }
  },
  methods: {
    async handleUpdateUsername(data) {
      this.username = data;
      
      await this.fetchUser(this.username);
      await this.fetchRepositories(this.userData.repos_url);
    },
    async fetchUser (username) {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        let data = await response.json();
        this.userData = data;
        console.log(this.userData);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchRepositories(url) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        this.userRepositories = data;
        console.log(this.userRepositories);
      } catch (error) {
        console.error(error);
      }
    },
  }
  }
</script>

<template>
    <Title/>
    <div>
      <SearchBar @updateEvent="handleUpdateUsername"/>
    </div>
    
    <Content/>
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
