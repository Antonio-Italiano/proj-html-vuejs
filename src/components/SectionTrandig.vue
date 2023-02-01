<script>
import ContentTranding from './production/content/ContentTranding.vue';
export default {
    name: 'SectionTrandingBattle',
    data() { return {} },
    components: { ContentTranding }
}
</script>

<template>
    <section id="tranding-battle">
        <div class="container-custom pt-5">
            <div class="row justify-content-center g-4 pt-5">
                <content-tranding></content-tranding>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
#tranding-battle {
    min-height: 185vh;
    background-color: #212733;

    h1 {
        font-size: 50px;
    }

    p {
        font-size: 13px;
    }
}
</style>