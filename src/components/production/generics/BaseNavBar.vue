<script>
import { navElement } from '../../../data'
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
        <li v-for="(e, i) in navElement" :key="e.text" class="mx-3">
            <a :href="e.url" :class="{ 'cliched': currentIndex === i }" @click="setCurrentIndex(i)">{{
                e.text
            }}
            </a>
            <!-- <div class="curtain p-3">
                <ul class="h-100 ps-0 d-flex flex-column justify-content-around">
                    <li v-for="t in e.textCurtain"><a href="#">{{ t }}</a></li>
                </ul>
            </div> -->
        </li>
    </ul>
</template>

<style lang="scss" scoped>
li {
    list-style-type: none;
    position: relative;

    a {
        text-decoration: none;
        color: #fff;

        &.cliched,
        &:hover {
            color: #FFAA5A;
            display: block;
        }
    }
}

.curtain {
    position: absolute;
    top: 28px;
    left: -100%;
    height: 130px;
    width: 140px;
    background-color: #1B212D;
    border: 1px solid #060d21;
    display: none;

    &.clicked,
    &:hover {
        color: #FFAA5A;
        display: block;
    }
}
</style>