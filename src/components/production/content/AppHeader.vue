<script>
import AppLogo from './AppLogo.vue';
import NavBar from '../generics/BaseNavBar.vue';
import BaseButton from '../generics/BaseButton.vue';
export default {
    name: 'AppHeader',
    data() { return { indexCart: '03', } },
    components: { AppLogo, NavBar, BaseButton },
    methods: {
        asClicked() {
            console.log('bottone cliccato')
        }
    }
}
</script>

<template>
    <header>
        <div class="row">
            <div class="col-3">
                <app-logo></app-logo>
            </div>
            <div class="col-6">
                <nav-bar></nav-bar>
            </div>
            <div class="col-3 d-flex align-items-center justify-content-end">
                <span class="me-4">
                    <font-awesome-icon icon="fa-solid fa-cart-shopping " class="text-white" />
                    <div class="index">{{ this.indexCart }}</div>
                </span>
                <base-button @button-clicked="asClicked" placeholder="LIVE STREAMING" href="#"></base-button>

            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    padding: 10px;
    position: relative;
    z-index: 1;


    span {
        position: relative;
    }

    .index {
        height: 14px;
        width: 14px;
        border-radius: 50px;
        position: absolute;
        top: 0px;
        left: 8px;
        background-color: #08CB7B;
        font-size: 10px;
        font-weight: 700;
        text-align: center;
    }
}
</style>