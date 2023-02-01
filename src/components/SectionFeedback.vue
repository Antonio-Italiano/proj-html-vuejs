<script>
import ContentFeedback from './production/content/ContentFeedback.vue';
export default {
    name: 'SectionFeedback',
    components: { ContentFeedback },
}
</script>

<template>
    <section id="feedback" class="py-5">
        <div class="container-custom ">
            <div class="row justify-content-center">
                <content-feedback></content-feedback>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
#feedback {
    height: 70vh;
    background-color: black;
}
</style>