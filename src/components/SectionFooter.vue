<script>
import ContentElevated from './production/content/ContentElevated.vue';
import ContentFooterUp from './production/content/ContentFooterUp.vue';
import ContentFooterDown from './production/content/ContentFooterDown.vue';
export default {
    name: 'SectionFooter',
    components: { ContentFooterUp, ContentFooterDown, ContentElevated },
}
</script>

<template>
    <section id="section-footer">
        <content-elevated></content-elevated>
        <content-footer-up></content-footer-up>
        <content-footer-down></content-footer-down>
    </section>
</template>

<style lang="scss" scoped>
#section-footer {
    position: relative;
    height: 67vh;
}
</style>