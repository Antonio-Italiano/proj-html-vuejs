<script>
import { store } from '../../../data/store'
export default {
    name: 'CardNews',
    data() { return { store } },
    computed: {
        imageSrc() {
            const url = new URL(`../../../assets/img/${this.store.thumbnels.img}.png`, import.meta.url);
            return url.href;
        },
    },
}
</script>

<template>
    <a href="#" class="card h-100 w-100 text-white" style="width: 18rem;">
        <img :src="imageSrc" class="card-img-top" alt="...">
        <div class="card-body">
            <div class="content d-flex align-items-center mx-2">
                <figure class="d-flex align-items-center">
                    <img src="../../../assets/icon/clock.png" alt="Clock">
                    <p>{{ this.store.thumbnels.time }}</p>
                </figure>
                <figure class="d-flex align-items-center mx-3">
                    <img src="../../../assets/icon/eye.png" alt="Eye">
                    <p>{{ this.store.thumbnels.visual }}</p>
                </figure>
                <figure class="d-flex align-items-center">
                    <img src="../../../assets/icon/calendar.png" alt="Calendar">
                    <p>{{ this.store.thumbnels.date }}</p>
                </figure>
            </div>
            <h3 class="card-text my-3">{{ this.store.thumbnels.text }}</h3>
        </div>
    </a>
</template>

<style lang="scss" scoped>
.card {
    background-color: #28344A;
    border-radius: 15px;
    text-decoration: none;

    .card-img-top {
        height: 65%;
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