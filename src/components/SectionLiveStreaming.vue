<script>
import ContentLiveStreaming from './production/content/ContentLiveStreaming.vue';
export default {
    name: 'SectionLiveStreaming',
    components: { ContentLiveStreaming }
}
</script>

<template>
    <section id="live-streaming" class="p-1">
        <content-live-streaming></content-live-streaming>
    </section>
</template>

<style lang="scss" scoped>
#live-streaming {
    min-height: 100vh;
    background-image: url(../assets/img/live-streaming-bg.png);
    background-position: top;
    background-size: 100vw;
    background-repeat: no-repeat;
    background-color: black;
}
</style>