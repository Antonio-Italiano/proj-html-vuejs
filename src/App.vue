<script>
import SectionJumbotron from './components/SectionJumbotron.vue';
import SectionPlatfrom from './components/SectionPlatfrom.vue';
import SectionTrandig from './components/SectionTrandig.vue';
import SectionCount from './components/SectionCount.vue';
export default {
  name: 'EsportGames',
  data() { return {} },
  components: { SectionJumbotron, SectionPlatfrom, SectionTrandig, SectionCount }
}
</script>

<template>
  <section-jumbotron></section-jumbotron>
  <section-platfrom></section-platfrom>
  <section-trandig></section-trandig>
  <section-count></section-count>

</template>

<style lang="scss">
.container-custom {
  width: 1100px;
  margin: 0 auto;
}
</style>
