<script>
export default {
    name: 'BaseList',
    props: { item: Object },
    computed: {
        imageSrc() {
            const url = new URL(`../../../assets/icon/${this.item.url}.png`, import.meta.url);
            return url.href;
        }
    }


}
</script>

<template>
    <ul class="p-0">
        <li class="my-2">
            <div class="border-customs d-flex">
                <a href="#" class=" icon d-flex align-items-center">
                    <img :src="imageSrc" :alt="item.title">
                </a>
                <div>
                    <h5>{{ item.title }}</h5>
                    <p>{{ item.text }}</p>
                </div>
            </div>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.icon {
    height: 60px;
    width: 60px;
    margin-right: 20px;

    img {
        height: 100%;
    }
}

li {
    list-style-type: none;
    margin-left: 0;
}

h4 {
    color: #94CB53;
}

p {
    font-size: 12px;
}
</style>