<script>
export default {
    name: 'CardFedback',
    data() { return {} },
    components: {},
    props: { item: Object },
    computed: {
        imageSrc() {
            const url = new URL(`../../../assets/img/${this.item.user.url}.png`, import.meta.url);
            return url.href;
        },
        // STAR
        fullStar() {
            return this.item.vote;
        },
        hollowStar() {
            return 5 - this.item.vote;
        }
    }
}
</script>

<template>
    <div class="card-custom mx-3 p-4 text-white d-flex flex-column justify-content-around">
        <div class="star">
            <font-awesome-icon icon="fa-solid fa-star" v-for="i in fullStar" :key="i" class="text-warning" />
            <font-awesome-icon icon="fa-solid fa-star" v-for="i in hollowStar" :key="i" />
        </div>
        <p class="text">{{ item.text }}</p>
        <div class="border-customs d-flex">
            <a href="#" class=" icon d-flex align-items-center me-2">
                <img :src="imageSrc" :alt="item.title">
            </a>
            <div>
                <h6>{{ item.user.name }}</h6>
                <p>{{ item.user.country }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-custom {
    height: 100%;
    width: 30%;
    border-radius: 25px;
    background-color: #28344A;

    .border-customs {
        height: 43px;

        p {
            font-size: 13px;
            color: #94CB53;
        }

        img {
            height: 100%;
        }
    }
}
</style>