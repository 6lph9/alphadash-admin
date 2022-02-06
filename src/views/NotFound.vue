<template>
  <div class="root">
    <card max-width="20rem">
      <h3>Oops! Page not found</h3>
      <h1><span>4</span><span>0</span><span>4</span></h1>
      <h2>we are sorry, but the page you requested was not found</h2>
      <router-link v-slot="{ href, navigate }" to="/">
        <border-button :href="href" @click="navigate">
          Go Home
        </border-button>
      </router-link>
    </card>
  </div>
</template>

<script lang="ts">
import BorderButton from '@/components/BorderButton.vue'
import Card from '@/components/base/Card.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { Card, BorderButton }
})
</script>

<style lang="scss" scoped>
@import '@/styles/App.scss';
@import url('https://fonts.googleapis.com/css?family=Montserrat:900');

.root {
  font-family: 'Prompt', 'sans-serif';
  margin: 0;
}

h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 8rem;
  font-weight: 900;
  margin: 0;
  color: $light;
  text-transform: uppercase;
  letter-spacing: -25px;
  margin-left: -20px;
}

h1>span {
  text-shadow: -5px 0px 0px $dark;
}

h3 {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
}

h2 {
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 20px;
}

@media only screen and (max-width: 767px) {
  h1 {
    font-size: 8rem;
  }
}

@media only screen and (max-width: 480px) {
  h1 {
    font-size: 7rem;
  }
  h2 {
    font-size: 12px;
  }
}

</style>
