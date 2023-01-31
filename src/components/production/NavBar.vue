<script>
import { navElement } from '../../data'
export default {
    name: 'NavBar',
    data() { return { currentIndex: 0, navElement } },
    methods: {
        setCurrentIndex(index) {
            this.currentIndex = index;
        }
    }

}
</script>

<template>
    <ul class="h-100 d-flex align-items-center">
        <li v-for="(e, i) in navElement" :key="e.text" class="mx-2">
            <a :href="e.url" :class="{ 'cliched': currentIndex === i }" @click="setCurrentIndex(i)">{{
                e.text
            }}
            </a>
        </li>
    </ul>
</template>

<style lang="scss">
li {
    list-style-type: none;

    a {
        text-decoration: none;
        color: #fff;

        &.cliched,
        &:hover {
            color: #94CB53;
        }
    }
}
</style>