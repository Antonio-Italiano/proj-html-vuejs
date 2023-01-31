<script>
import AppLogo from './AppLogo.vue';
export default {
    name: 'AppHeader',
    data() { return {} },
    components: { AppLogo },
}
</script>

<template>
    <header>
        <div class="row">
            <div class="col-3">
                <app-logo></app-logo>
            </div>
            <div class="col-6">

            </div>
            <div class="col-3"></div>
        </div>
    </header>
</template>

<style lang="scss">

</style>