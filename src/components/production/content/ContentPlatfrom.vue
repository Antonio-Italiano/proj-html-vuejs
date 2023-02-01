<script>
import { platfromElement } from '../../../data';
import BaseHeading from '../generics/BaseHeading.vue';
import BaseList from '../generics/BaseList.vue';
import BaseButton from '../generics/BaseButton.vue';
export default {
    name: 'ContentPlatfrom',
    data() { return { platfromElement } },
    components: { BaseHeading, BaseList, BaseButton },
    methods: {
        asClicked() {
            console.log('bottone cliccato')
        }
    }
}
console.log()
</script>

<template>
    <div class="col-4 h-100 text-white d-flex flex-column justify-content-center">
        <base-heading informative="The Ultimate Competitive Gaming Platfrom" title="Make Your Mark On The Battle Field"
            text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"></base-heading>
        <base-list v-for="e in this.platfromElement" :key="e.title" :item="e"></base-list>
        <base-button @button-clicked="asClicked" placeholder="PLAN NOW" href="#"></base-button>
    </div>

</template>

<style lang="scss" scoped>

</style>