<template>
  <router-view />
</template>

<style lang="scss">
@import '@/styles/App.scss';

body, html {
  height: 100%;
  width: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.root {
  height: 100vh;
  display: flex;
  justify-content: center;  /* links-rechts */
  align-items: center;
}

#app {
  font-family: Prompt, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text;
  background: $bg-primary;
  height: 100%;
  width: 100%;
}

h1, h2, h3, h4, h5, h6 {
  color: $light;
}

.title {
  color: $light;
}

.text {
  color: $text;
  font-family: system-ui;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $text;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
