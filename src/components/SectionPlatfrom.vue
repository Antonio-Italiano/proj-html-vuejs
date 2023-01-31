<script>
import ContentPlatfrom from './production/content/ContentPlatfrom.vue';
export default {
    name: 'SectionPlatfrom',
    data() { return {} },
    components: { ContentPlatfrom },
}
</script>

<template>
    <section id="platfrom" class="container-fluid">
        <div class="row">
            <div class="col-6 h-100 d-flex align-items-center">
                <img class="h-75" src="../assets/img/features-illus.png" alt="Features Illus">
            </div>
            <content-platfrom></content-platfrom>
        </div>
    </section>
</template>

<style lang="scss" scoped>
#platfrom {
    min-height: 90vh;
    background-color: black;

    .row {
        height: 90vh;


    }
}
</style>