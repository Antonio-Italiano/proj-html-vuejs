<script>
import CardNews from './CardNews.vue';
import CardNewsLittle from './CardNewsLittle.vue';
import BaseHeading from '../generics/BaseHeading.vue';
import { cardNewsData } from '../../../data';
export default {
    name: 'contentLatestNews',
    data() { return { cardNewsData } },
    components: { BaseHeading, CardNews, CardNewsLittle },
}
</script>

<template>
    <div class="container-custom" id="content-latest-news">
        <div class="row justify-content-center">
            <div class="col-7 text-center">
                <base-heading informative="Latest News" title="Stay Updated With Our Latest News Articles"
                    text="Sed ut perspiciatis unde omnis iste unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"></base-heading>
            </div>
            <div class="box row justify-content-center my-4">
                <div class="thumbnels col-6">
                    <card-news></card-news>
                </div>
                <div class="col-6 ">
                    <div class="list-c row">
                        <card-news-little v-for="c in this.cardNewsData" :key="c.id" :item="c"></card-news-little>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
#content-latest-news {

    .col-7 {
        h1 {
            font-size: 50px;
        }

        p {
            font-size: 14px;
        }
    }

    .box {
        height: 450px;
    }

    .thumbnels {
        height: 450px;

    }

    .list-c {
        height: 450px;
        overflow: auto;
    }

    ::-webkit-scrollbar {
        height: 0px;
        width: 0px;
    }
}
</style>