<script>
import AppLogo from './AppLogo.vue';
import { links } from '../../../data';
import { help } from '../../../data';
import { follow } from '../../../data';
import { location } from '../../../data';
import { phone } from '../../../data';
export default {
    name: 'ContentFooterUp',
    data() { return { links, help, follow, location, phone } },
    components: { AppLogo },
}
</script>

<template>
    <div class="content-up">
        <div class="container-custom h-100">
            <div class="row h-100 justify-content-center align-items-center text-white">
                <div class="col-4 text-white">
                    <div>
                        <app-logo></app-logo>
                    </div>
                    <p class="my-4">Lorem ipsum dolor sit, amet consectetur Voluptatum, fuga. Esse reprehenderit
                    </p>
                    <div class="d-flex">
                        <a href="#">
                            <div class="border p-2">
                                <font-awesome-icon icon="fa-brands fa-youtube" />
                            </div>
                        </a>
                        <a href="#">
                            <div class="border p-2 mx-2">
                                <font-awesome-icon icon="fa-brands fa-twitch" />
                            </div>
                        </a>
                        <a href="#">
                            <div class="border p-2 me-2">
                                <font-awesome-icon icon="fa-brands fa-facebook-f" />
                            </div>
                        </a>
                        <a href="#">
                            <div class="border p-2">
                                <font-awesome-icon icon="fa-brands fa-instagram" />
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-8 d-flex justify-content-between">
                    <ul class="p-0">
                        <h4>Quick Links</h4>
                        <a href="#">
                            <li v-for="l in this.links">{{ l }}</li>
                        </a>
                    </ul>
                    <ul class="p-0">
                        <h4>Help</h4>
                        <a href="#">
                            <li v-for="l in this.help">{{ l }}</li>
                        </a>
                    </ul>
                    <ul class="p-0">
                        <h4>Follow Us</h4>
                        <a href="#">
                            <li v-for="l in this.follow">{{ l }}</li>
                        </a>
                    </ul>
                    <ul class="p-0">
                        <h4>Contect</h4>
                        <a href="#">
                            <h6>Location:</h6>
                            <li v-for="l in this.location">{{ l }}</li>
                        </a>
                        <a href="#">
                            <h6>Phone:</h6>
                            <li v-for="l in this.phone">{{ l }}</li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.content-up {
    height: 58vh;
    background-color: #28344A;

    .border {
        height: 31px;
        width: 31px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        color: rgba(255, 255, 255, 0.500);
        border-color: rgba(255, 255, 255, 0.500);
    }

    li:hover,
    a:hover .border {
        color: rgba(255, 255, 255);
        border-color: rgb(255, 255, 255);
    }

}

a {
    text-decoration: none;
}

h6 {
    color: #FFAA5A;
    margin: 0;
    margin-top: 10px;
}

li {
    list-style-type: none;
    color: rgba(255, 255, 255, 0.305);
}
</style>