<script>
import Title from './components/Title.vue';
import Content from './components/Content.vue';
import SearchBar from './components/SearchBar.vue';
import {mockData} from '../src/components/__tests__/mockUser';
import {mockRepos} from '../src/components/__tests__/mockRepos';

export default {
  components: {
    Title,
    Content,
    SearchBar,
  },
  props: {
    user: Object,
    repos: Object,
  },
  data () {
    return {
      username: "",
      userData: {},
      userRepositories: {},
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
      } catch (error) {
        console.error(error);
      }
    },
    async fetchRepositories(url) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        this.userRepositories = data;
      } catch (error) {
        console.error(error);
      }
    },
  }
  }
</script>

<template>
  <div class="container">
    <Title/>
    <SearchBar @updateEvent="handleUpdateUsername"/>
  </div>
    <Content v-if="Object.keys(userData).length !== 0" v-bind:user="this.userData" v-bind:repos="this.userRepositories"/>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
}

header {
  line-height: 1.5;
}

</style>
