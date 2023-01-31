<script>
import BaseButton from '../generics/BaseButton.vue';
export default {
    name: 'ContentJumbotron',
    data() { return {} },
    components: { BaseButton }

}
</script>

<template>
    <div class="row">
        <!-- BACKGROUND  -->
        <div id="background" class="col-5 h-100 px-5 d-flex align-items-end">
            <img class="" src="../../../assets/img/game-controler-2.png" alt="Game Controler">
        </div>
        <!-- CONTENT UP -->
        <div id="content-up" class="col-5 h-100 px-5 d-flex align-items-center justify-content-end text-white">
            <div class="w-75">
                <h4>Game With Live Stearming</h4>
                <h1 class="">Future Of Esports</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                <div class="d-flex align-items-center">
                    <base-button @button-clicked="asClicked" placeholder="EXPLORE GAMES >>" href="#"></base-button>
                    <div class="border-customs ms-4">
                        <a href="#" class=" btn-play d-flex align-items-center justify-content-center">
                            <img src="../../../assets/icon/play-icon.png" alt="play">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- CONTENT RIGHT  -->
        <div class="col-7 h-100 d-flex align-items-center justify-content-start content-right">
            <img class="" src="../../../assets/img/index-banner-illus.png" alt="Banner Illus">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.row {
    height: calc(90vh - 76px);

    #content-up {
        position: absolute;
        bottom: 25px;
        left: 70px;

        .border-customs {
            width: fit-content;
            padding: 5px 0;
            border-radius: 50%;
            border: 1px solid #08CB7B;

            .btn-play {
                height: 40px;
                width: 40px;
                margin: 2px 7px;
                border-radius: 50%;
                background-color: #fff;
            }
        }

        h1 {
            font-size: 70px;
        }

        h4 {
            color: #94CB53;
        }
    }

    #background {
        position: relative;

        img {
            margin-bottom: 100px;
            opacity: 0.3;
            height: 40%;
        }
    }

    .content-right img {
        height: 800px;
        object-fit: cover;
    }
}
</style>