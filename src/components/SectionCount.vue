<script>
import ContentCount from './production/content/ContentCount.vue';
import { countData } from '../data';
export default {
    name: 'SectionCount',
    data() { return { countData } },
    components: { ContentCount },
}
</script>

<template>
    <section id="count">
        <div class="container-custom">
            <div class="row h-100 align-items-center justify-content-between">
                <div class="col-12 text-center text-white py-5">
                    <h1>Futio Quick Facts</h1>
                </div>
                <content-count v-for="d in this.countData" :key="d.id" :item="d"></content-count>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
#count {
    min-height: 55vh;
    background-color: black;

    h1 {
        font-size: 50px;
    }
}
</style>