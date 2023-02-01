<script>
export default {
    name: 'BaseHeading',
    props: {
        informative: Array,
        title: Array,
        text: Array
    }
}
</script>

<template>
    <h4>{{ informative }}</h4>
    <h1 class="">{{ title }}</h1>
    <p>{{ text }}</p>
</template>

<style lang="scss" scoped>
h4 {
    color: #94CB53;
}

p {
    font-size: 12px;
}
</style>