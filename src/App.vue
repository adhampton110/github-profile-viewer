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
    }
  },
  methods: {
    handleUpdateUsername(data) {
      this.username = data;
    }
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
