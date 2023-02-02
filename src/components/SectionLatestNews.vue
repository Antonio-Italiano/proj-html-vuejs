<script>
import ContentLatestNews from './production/content/ContentLatestNews.vue';
export default {
    name: 'SectionLatestNews',
    components: { ContentLatestNews },
}
</script>

<template>
    <section id="section-latest-news">
        <content-latest-news></content-latest-news>
    </section>
</template>

<style lang="scss" scoped>
#section-latest-news {
    height: 120vh;
    background-color: black;
}
</style>