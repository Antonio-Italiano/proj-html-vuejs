<script>
import AppHeader from './production/content/AppHeader.vue';
import ContentJumbotron from './production/content/ContentJumbotron.vue';
export default {
    name: 'SectionJumbotron',
    data() { return {} },
    components: { AppHeader, ContentJumbotron }
}
</script>

<template>
    <section id="jumbotron">
        <div class="container-custom">
            <!-- <app-header></app-header> -->
        </div>
        <content-jumbotron></content-jumbotron>
    </section>

</template>

<style lang="scss" scoped>
#jumbotron {
    margin-top: -75px;
    padding-top: 150px;
    min-height: 100vh;
    background-image: url(../assets/img/index-banner-bg.png);
}
</style>