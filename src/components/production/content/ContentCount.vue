<script>
export default {
    name: 'ContentCount',
    props: { item: Object }
}
</script>

<template>
    <div class="col-3 p-4 d-flex align-items-center justify-content-center flex-column text-white">
        <h1>{{ item.number }}</h1>
        <p>{{ item.text }}</p>
    </div>
</template>

<style lang="scss" scoped>
.col-3 {
    height: 150px;
    width: calc(24%);
    border: 1px solid grey;
    border-radius: 45px;

    p {
        color: #94CB53;
    }
}
</style>