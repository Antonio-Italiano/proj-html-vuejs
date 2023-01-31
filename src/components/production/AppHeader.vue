<script>
import AppLogo from './AppLogo.vue';
import NavBar from './NavBar.vue';
export default {
    name: 'AppHeader',
    data() { return {} },
    components: { AppLogo, NavBar },
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
            <div class="col-3"></div>
        </div>
    </header>
</template>

<style lang="scss">

</style>