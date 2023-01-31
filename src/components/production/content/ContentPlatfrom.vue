<script>
import BaseButton from '../generics/BaseButton.vue';
export default {
    name: 'ContentPlatfrom',
    components: { BaseButton },

}
</script>

<template>
    <div class="col-4 h-100 text-white d-flex flex-column justify-content-center">
        <h4>The Ultimate Competitive Gaming Platfrom</h4>
        <h1 class="">Make Your Mark On The Battle Field</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
        <ul class="p-0">
            <li>
                <div class="border-customs d-flex">
                    <a href="#" class=" icon d-flex align-items-center">
                        <img src="../../../assets/icon/features-icon-1.png" alt="play">
                    </a>
                    <div>
                        <h5>Live Streaming</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi corrupti
                            voluptates.</p>
                    </div>
                </div>
            </li>
            <li class="my-4">
                <div class="border-customs d-flex">
                    <a href="#" class=" icon d-flex align-items-center justify-content-center">
                        <img src="../../../assets/icon/features-icon-2.png" alt="play">
                    </a>
                    <div>
                        <h5>Great Tournament</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi corrupti
                            voluptates.</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="border-customs d-flex">
                    <a href="#" class=" icon d-flex align-items-center justify-content-center">
                        <img src="../../../assets/icon/features-icon-3.png" alt="play">
                    </a>
                    <div>
                        <h5>Gaming News</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi corrupti
                            voluptates.</p>
                    </div>
                </div>
            </li>
        </ul>
        <base-button @button-clicked="asClicked" placeholder="PLAN NOW" href="#"></base-button>
    </div>

</template>

<style lang="scss" scoped>
.icon {
    height: 60px;
    width: 60px;
    margin-right: 20px;

    img {
        height: 100%;
    }
}

li {
    list-style-type: none;
    margin-left: 0;
}

p {
    font-size: 12px;
}
</style>