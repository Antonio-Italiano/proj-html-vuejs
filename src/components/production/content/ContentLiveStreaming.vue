<script>
import BaseHeading from '../generics/BaseHeading.vue';
import CardStreaming from './CardStreaming.vue';
export default {
    name: 'ContentLiveStreaming',
    components: { BaseHeading, CardStreaming }
}
</script>

<template>
    <div class="container-custom pt-4">
        <div class="row justify-content-center">
            <div class="col-7 text-center my-4">
                <base-heading informative="Live Streming" title="Watch The Streams"
                    text="Sed ut perspiciatis unde omnis iste unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"></base-heading>
            </div>
            <div class="col-10">
                <card-streaming></card-streaming>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.col-10 {
    filter: grayscale(.3);

}

.col-10:hover {
    filter: grayscale(0);

}
</style>