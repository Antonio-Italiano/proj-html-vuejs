<script>
import SectionJumbotron from './components/SectionJumbotron.vue';
import SectionPlatfrom from './components/SectionPlatfrom.vue';
import SectionTrandig from './components/SectionTrandig.vue';
import SectionCount from './components/SectionCount.vue';
import SectionLiveStreaming from './components/SectionLiveStreaming.vue';
import SectionFeedback from './components/SectionFeedback.vue';
import SectionLatestNews from './components/SectionLatestNews.vue';
export default {
  name: 'EsportGames',
  data() { return {} },
  components: {
    SectionJumbotron, SectionPlatfrom, SectionTrandig, SectionCount,
    SectionLiveStreaming, SectionFeedback, SectionLatestNews
  }
}
</script>

<template>
  <section-jumbotron></section-jumbotron>
  <section-platfrom></section-platfrom>
  <section-trandig></section-trandig>
  <section-count></section-count>
  <section-live-streaming></section-live-streaming>
  <section-feedback></section-feedback>
  <section-latest-news></section-latest-news>

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
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-block: 3px;
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
