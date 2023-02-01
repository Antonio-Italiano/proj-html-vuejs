<script>
export default {
    name: 'CardBattle',
    props: { item: Object },
    computed: {
        gamer1() {
            const url = new URL(`../../../assets/img/${this.item.gamer1Img}.png`, import.meta.url);
            return url.href;
        },
        gamer2() {
            const url = new URL(`../../../assets/img/${this.item.gamer2Img}.png`, import.meta.url);
            return url.href;
        },
        // currentTime() {
        //     return this.item.date = dateTime.now().setLocale('it').toLocaleString(dateTime.DATETIME_SHORT);
        // }
    }

}
</script>

<template>
    <div class="col-6">
        <div class="card text-center">
            <div class="card-header">
                <figure class="h-100 d-flex justify-content-between align-items-center m-0 p-4">
                    <a href="#">
                        <img :src="gamer1" alt="Gamer 1">
                    </a>
                    <img src="../../../assets/img/versus-icon.png" alt="">
                    <a href="#">
                        <img :src="gamer2" alt="Gamer 2">
                    </a>
                </figure>
            </div>
            <div class="card-body">
                <a href="#">
                    <h5 class="card-title text-white">{{ item.game }}</h5>
                    <p class="card-text">{{ item.date }}</p>
                </a>
            </div>
            <div class="card-footer d-flex justify-content-center align-items-center">
                <a href="#" class="d-flex align-items-center mx-3 my-4">
                    <img src="../../../assets/icon/youtube-icon.png" alt="">
                    <h6 class="text-white ms-1">YouTube</h6>
                </a>
                <a href="#" class="d-flex align-items-center mx-3 my-4">
                    <img src="../../../assets/icon/twitch-icon.png" alt="">
                    <h6 class="text-white ms-1">Twitch</h6>
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    border: 1px solid rgb(126, 126, 227);
    border-radius: 20px;

    a {
        text-decoration: none;
    }

    .card-body {
        background-color: #30415F;

        p {
            color: #94CB53;
        }
    }

    .card-header {
        background-color: #28344A;
        border-radius: 20px 20px 0 0;
    }

    .card-footer {
        background-color: #28344A;
        border-radius: 0 0 20px 20px;
    }
}
</style>