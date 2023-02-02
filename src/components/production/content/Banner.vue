<script>
export default {
    name: 'Banner',
}
</script>

<template>
    <div class="banner my5">
        <figure class="h-100 w-100 text-white text-center">
            <img src="../../../assets/img/banner-item-bg.png" alt="" class="h-100 w-100">
            <div class="up-left">
                <img src="../../../assets/img/banner-item-obj1.png" alt="Obj1">
            </div>
            <div class="up-center">
                <h4>Make Offer</h4>
                <h1>Get 70% Offer Discount</h1>
                <a href="#" class="btn px-5 py-2 mt-4 text-white">Get Offers</a>
            </div>
            <div class="up-right d-flex align-items-end">
                <img src="../../../assets/img/banner-item-obj2.png" alt="Obj2">
            </div>
        </figure>
    </div>
</template>

<style lang="scss" scoped>
.banner {
    height: 50vh;

    figure {
        position: relative;
    }

    .up-left {
        height: 80%;
        position: absolute;
        left: 10px;
        bottom: 0;
        overflow: hidden;

        img {
            width: 330px;
        }
    }

    .up-center {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%);

        h1 {
            font-size: 55px;
        }

        .btn {
            background-color: #1A8F3E;
            border-radius: 30px;
        }
    }

    .up-right {
        height: 65%;
        position: absolute;
        right: 10px;
        top: 0;
        overflow: hidden;

        img {
            width: 260px;
        }
    }
}
</style>