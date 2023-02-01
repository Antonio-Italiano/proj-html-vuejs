<script>
import SectionJumbotron from './components/SectionJumbotron.vue';
import SectionPlatfrom from './components/SectionPlatfrom.vue';
import SectionTrandig from './components/SectionTrandig.vue';
export default {
  name: 'EsportGames',
  data() { return {} },
  components: { SectionJumbotron, SectionPlatfrom, SectionTrandig }
}
</script>

<template>
  <section-jumbotron></section-jumbotron>
  <section-platfrom></section-platfrom>
  <section-trandig></section-trandig>

</template>

<style lang="scss">
.container-custom {
  width: 1100px;
  margin: 0 auto;
}
</style>
