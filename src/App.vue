<script>
import AppHeader from './components/production/content/AppHeader.vue';
import SectionJumbotron from './components/SectionJumbotron.vue';
import SectionPlatfrom from './components/SectionPlatfrom.vue';
import SectionTrandig from './components/SectionTrandig.vue';
import SectionCount from './components/SectionCount.vue';
import SectionLiveStreaming from './components/SectionLiveStreaming.vue';
import SectionFeedback from './components/SectionFeedback.vue';
import SectionLatestNews from './components/SectionLatestNews.vue';
import SectionFooter from './components/SectionFooter.vue';
export default {
  name: 'EsportGames',
  data() { return {} },
  components: {
    AppHeader, SectionJumbotron, SectionPlatfrom, SectionTrandig, SectionCount,
    SectionLiveStreaming, SectionFeedback, SectionLatestNews, SectionFooter
  }
}
</script>

<template>
  <app-header></app-header>
  <section-jumbotron></section-jumbotron>
  <main>
    <section-platfrom></section-platfrom>
    <section-trandig></section-trandig>
    <section-count></section-count>
    <section-live-streaming></section-live-streaming>
    <section-feedback></section-feedback>
    <section-latest-news></section-latest-news>
  </main>
  <footer>
    <section-footer></section-footer>
  </footer>

</template>

<style lang="scss">
.container-custom {
  width: 1100px;
  margin: 0 auto;
}

::-webkit-scrollbar {
  height: 10px;
  width: 10px;
}

::-webkit-scrollbar-track {
  background-color: rgb(64, 64, 64);
}

::-webkit-scrollbar-thumb {
  background-color: rgb(173, 170, 170);
  border-radius: 100vw;
  margin-block: 1px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgb(138, 138, 138);
}
</style>
