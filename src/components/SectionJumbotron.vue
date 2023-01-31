<script>
import AppHeader from './production/AppHeader.vue';
export default {
    name: 'SectionJumbotron',
    data() { return {} },
    components: { AppHeader }
}
</script>

<template>
    <section id="jumbotron">
        <div class="container-custom">
            <app-header></app-header>
        </div>
    </section>

</template>

<style lang="scss">
#jumbotron {
    min-height: 90vh;
    background-image: url(../assets/img/index-banner-bg.png);
}
</style>