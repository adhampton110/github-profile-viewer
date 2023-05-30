<script>
import Title from './components/Title.vue';
import Content from './components/Content.vue';
import SearchBar from './components/SearchBar.vue';
import Popup from './components/Popup.vue';

export default {
  components: {
    Title,
    Content,
    SearchBar,
    Popup,
  },
  props: {
    user: Object,
    repos: Object,
    title: String,
    message: String,
  },
  data () {
    return {
      username: "",
      userData: {},
      userRepositories: {},
      trigger: false,
      popupTitle: "title",
      popupMessage: "message",
    }
  },
  methods: {
    handleDismiss() {
      console.log('handle called');
      this.trigger = false;
    },
    async handleUpdateUsername(data) {
      this.username = data;
      
      await this.fetchUser(this.username);
      console.log(this.userData);
      if (Object.keys(this.userData).length !== 0) {
        await this.fetchRepositories(this.userData.repos_url);
      }
    },
    async fetchUser (username) {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          console.log('this triggered');
          const error = new Error('User Not Found');
          error.response = response;
          throw error;
        } else {
          let data = await response.json();
          this.userData = data;
          console.log(this.userData);
        }
      } catch (error) {
        console.log(error);
        this.popupTitle = `Error: ${error.message}`;
        this.popupMessage = `Could not find a public account with the username: ${username}`;
        this.userData = {};
        this.trigger = true;
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
  <Popup  v-if="this.trigger" v-bind:title="this.popupTitle" v-bind:message="this.popupMessage" @dismiss="handleDismiss"/>
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
