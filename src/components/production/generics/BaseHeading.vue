<script>
export default {
    name: 'BaseHeading',
    props: {
        informative: String,
        title: String,
        text: String
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
    color: #FFAA5A;
}

h1 {
    color: #fff;
}

p {
    font-size: 12px;
    color: #fff;
}
</style>