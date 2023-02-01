<script>
import LiveIcon from '../generics/LiveIcon.vue'
import PlayBtn from '../generics/PlayBtn.vue';
export default {
    name: 'CardStreaming',
    components: { LiveIcon, PlayBtn }

}
</script>

<template>
    <figure class="carde align-items-start">
        <img src="../../../assets/img/video-bg-2.png" alt="Streaming">
        <!-- POSITION ABOVE  -->
        <div class="live">
            <live-icon></live-icon>
        </div>
        <div class="play">
            <play-btn></play-btn>
        </div>
        <div class="visual d-flex text-white">
            <div class="d-flex me-5">
                <div class="number me-2">356599</div>
                <p>Viewers</p>
            </div>
            <div class="d-flex">
                <div class="number me-2">23599</div>
                <p>Likes</p>
            </div>
        </div>
    </figure>
</template>

<style lang="scss" scoped>
.visual {
    position: absolute;
    bottom: 20px;
    left: 40px;

    .number {
        color: #94CB53;
    }
}

.live {
    position: absolute;
    top: 40px;
    right: 40px;
}

.play {
    position: absolute;
    top: 45%;
    right: 50%;
    transform: translate(50%);
    transform: translateX(35%);
    scale: 1.3;
}

.carde {
    position: relative;
    height: 500px;
    border-radius: 20px;
    background-image: url(../../../assets/img/video-bg.png);
    background-position: top;
    background-size: 100%;
    padding-top: 40px;

    img {
        max-width: 100%;
        height: 460px;
        display: block;
        border: 1px solid transparent;
        border-radius: 0 0 20px 20px;
    }
}
</style>