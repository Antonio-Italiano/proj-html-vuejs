<script>
import ContentFeedback from './production/content/ContentFeedback.vue';
import Banner from './production/content/Banner.vue';
export default {
    name: 'SectionFeedback',
    components: { ContentFeedback, Banner },
}
</script>

<template>
    <section id="feedback" class="py-5">
        <div class="container-custom ">
            <div class="row justify-content-center my-5">
                <content-feedback></content-feedback>
            </div>
        </div>
        <div class="container my-5">
            <banner></banner>
        </div>
    </section>
</template>

<style lang="scss" scoped>
#feedback {
    min-height: 70vh;
    background-color: black;
}
</style>