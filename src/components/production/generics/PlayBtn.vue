<script>
export default {
    name: 'PlayBtn',

}
</script>

<template>
    <div class="border-customs ms-4">
        <a href="#" class=" btn-play d-flex align-items-center justify-content-center">
            <img src="../../../assets/icon/play-icon.png" alt="play">
        </a>
    </div>
</template>

<style lang="scss" scoped>
.border-customs {
    width: fit-content;
    padding: 5px 0;
    border-radius: 50%;
    border: 1px solid transparent;

    &.border-customs:hover {
        border-color: #08CB7B;
    }

    .btn-play {
        height: 40px;
        width: 40px;
        margin: 2px 7px;
        border-radius: 50%;
        background-color: #fff;
    }
}
</style>