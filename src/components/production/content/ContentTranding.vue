<script>
import { cardBattleData } from '../../../data';
import BaseHeading from '../generics/BaseHeading.vue';
import CardBattle from './CardBattle.vue';
import BaseButton from '../generics/BaseButton.vue';
export default {
    name: 'ContentTranding',
    data() { return { cardBattleData } },
    components: { BaseHeading, CardBattle, BaseButton },
    methods: {
        asClicked() {
            console.log('bottone cliccato')
        }
    }
}
</script>

<template>
    <div class="col-7 text-center mb-5">
        <base-heading informative="Trending Battle" title="Keep Eyes & manage Upcoming Battle"
            text="Sed ut perspiciatis unde omnis iste natus unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"></base-heading>
    </div>
    <card-battle v-for="c in this.cardBattleData" :key="c.id" :item="c"></card-battle>
    <div class="col-12 d-flex justify-content-center my-5">
        <base-button @button-clicked="asClicked" placeholder="VIEW ALL MATCH >>" href="#"></base-button>
    </div>
</template>

<style lang="scss" scoped>
h1 {
    font-size: 60px;
}
</style>