<script>
import AppHeader from './production/AppHeader.vue';
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
            <app-header></app-header>
        </div>
        <content-jumbotron></content-jumbotron>
    </section>

</template>

<style lang="scss" scoped>
#jumbotron {
    min-height: 90vh;
    background-image: url(../assets/img/index-banner-bg.png);
}
</style>