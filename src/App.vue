<script>
import SectionJumbotron from './components/SectionJumbotron.vue';
import SectionPlatfrom from './components/SectionPlatfrom.vue';
export default {
  name: 'EsportGames',
  data() { return {} },
  components: { SectionJumbotron, SectionPlatfrom }
}
</script>

<template>
  <section-jumbotron></section-jumbotron>
  <section-platfrom></section-platfrom>

</template>

<style lang="scss">
.container-custom {
  width: 1200px;
  margin: 0 auto;
}
</style>
