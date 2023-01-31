<script>
import { platfromElement } from '../../../data';
import BaseList from '../generics/BaseList.vue';
import BaseButton from '../generics/BaseButton.vue';
export default {
    name: 'ContentPlatfrom',
    data() { return { platfromElement } },
    components: { BaseList, BaseButton },
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
        <h4>The Ultimate Competitive Gaming Platfrom</h4>
        <h1 class="">Make Your Mark On The Battle Field</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
        <base-list v-for="e in this.platfromElement" :key="e.title" :item="e"></base-list>
        <base-button @button-clicked="asClicked" placeholder="PLAN NOW" href="#"></base-button>
    </div>

</template>

<style lang="scss" scoped>
h4 {
    color: #94CB53;
}

p {
    font-size: 12px;
}
</style>