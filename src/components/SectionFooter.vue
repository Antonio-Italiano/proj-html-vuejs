<script>
import ContentFooterUp from './production/content/ContentFooterUp.vue';
import ContentFooterDown from './production/content/ContentFooterDown.vue';
export default {
    name: 'SectionFooter',
    components: { ContentFooterUp, ContentFooterDown },
}
</script>

<template>
    <section id="section-footer">
        <content-footer-up></content-footer-up>
        <content-footer-down></content-footer-down>
    </section>
</template>

<style lang="scss" scoped>
#section-footer {
    height: 67vh;
}
</style>