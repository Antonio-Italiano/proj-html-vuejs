<script>
import { store } from '../../../data/store'
export default {
    name: 'CardNewsLitle',
    data() { return { store } },
    props: { item: Object },
    computed: {
        imageSrc() {
            const url = new URL(`../../../assets/img/${this.item.img}.png`, import.meta.url);
            return url.href;
        },
    },
    methods: {
        changeCard() {
            this.store.thumbnels = {};
            this.store.thumbnels = this.item;
            console.log(this.store.thumbnels);
        }
    }
}
</script>

<template>
    <div @click="changeCard" class="card-little mb-3 ps-0 d-flex text-white" style="width: 18rem;">
        <figure class="col-4 h-100">
            <img :src="imageSrc" class="h-100 w-100 img" alt="Img Articol">
        </figure>
        <div class="ms-3 p-2 col-8 h-100 d-flex flex-column justify-content-center mx-2">
            <div class="content d-flex align-items-center mx-2">
                <figure class="d-flex align-items-center">
                    <img src="../../../assets/icon/clock.png" alt="Clock">
                    <p>{{ item.time }}</p>
                </figure>
                <figure class="d-flex align-items-center mx-3">
                    <img src="../../../assets/icon/eye.png" alt="Eye">
                    <p>{{ item.visual }}</p>
                </figure>
                <figure class="d-flex align-items-center">
                    <img src="../../../assets/icon/calendar.png" alt="Calendar">
                    <p>{{ item.date }}</p>
                </figure>
            </div>
            <h5>{{ item.text }}</h5>

        </div>

    </div>
</template>

<style lang="scss" scoped>
.card-little {
    background-color: #28344A;
    border-radius: 15px;
    min-width: 522px;
    height: calc(450px / 3 - 20px);
    cursor: pointer;

    .img {
        border-radius: 15px 0 0 15px;
    }

    .content {
        height: 30px;

        figure {
            img {
                height: 11px;
            }
        }

        p {
            font-size: 12px;
            color: #FFAA5A;
            margin: 0;
            margin-left: 3px;
        }

    }

}
</style>