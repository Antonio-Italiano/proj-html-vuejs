<script>
import { cardFeedbackData } from '../../../data';
import CardFeedback from './CardFeedback.vue';
import BaseHeading from '../generics/BaseHeading.vue';
export default {
    name: 'ContentFeedback',
    data() { return { cardFeedbackData } },
    components: { BaseHeading, CardFeedback },
}
</script>

<template>
    <div class="col-6 text-center">
        <base-heading informative="Futio Feedback" title="Watch Our Gamers Say"
            text="Sed ut perspiciatis unde omnis iste unde omnis iste omnis iste unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"></base-heading>
    </div>
    <div class="row p-0 box-custom my-4">
        <card-feedback v-for="c in this.cardFeedbackData" :key="c.id" :item="c"></card-feedback>
    </div>

</template>

<style lang="scss" scoped>
.box-custom {
    height: 30vh;
    flex-wrap: nowrap;
    overflow-x: auto;
}

::-webkit-scrollbar {
    height: 0px;
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