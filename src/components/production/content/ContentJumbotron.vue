<script>
import BaseButton from '../generics/BaseButton.vue';
import PlayBtn from '../generics/PlayBtn.vue';
export default {
    name: 'ContentJumbotron',
    data() { return {} },
    components: { BaseButton, PlayBtn },
    methods: {
        asClicked() {
            console.log('bottone cliccato')
        }
    }

}
</script>

<template>
    <div class="row m-0">
        <!-- BACKGROUND  -->
        <div id="background" class="col-5 h-100 px-5 d-flex align-items-end">
            <img class="" src="../../../assets/img/game-controler-2.png" alt="Game Controler">
        </div>
        <!-- CONTENT UP -->
        <div id="content-up" class="col-5 h-100 px-5 ms-5 d-flex align-items-center justify-content-start text-white">
            <div class="w-75">
                <h4>Game With Live Stearming</h4>
                <h1 class="">Future Of Esports</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                <div class="d-flex align-items-center">
                    <base-button @button-clicked="asClicked" placeholder="EXPLORE GAMES >>" href="#"></base-button>
                    <play-btn></play-btn>
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
        left: 120px;

        h1 {
            font-size: 70px;
        }

        h4 {
            color: #FFAA5A;
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