<script>
export default {
        name: "Repository",
        props:['title','repoLink','description','watcherCount','forkCount'],
    }
</script>

<template>
    <div class="repo">
        <a :href="repoLink">{{ title }}</a>
        <p>{{description}}</p>
        <div class="item">
            <svg fill="#EBEBEBA3" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
            </svg>
            <p class="inline">{{watcherCount}} forks</p>
        </div>
        <div class="item">
            <svg fill="#EBEBEBA3" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                <path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path>
            </svg>
            <p class="inline">{{forkCount}} watching</p>
        </div>
    </div>
    
</template>

<style scoped>
svg{
    padding-top: 2px;
}

a {
    color: #6CC644;
}
.repo {
    padding-top: 20px;
    padding-bottom: 20px;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

.item {
    display: inline-block;
    padding-left: 5px;
    padding-right: 5px;
}

.inline {
    display: inline-block;
    padding-top: 5px;
    padding-left: 2px;
    padding-right:8px;
    padding-bottom:5px;
}

a,h3 {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>