<script>
export default {
    name: 'ContentElevated',
    data() { return { email: '' } },
    methods: {
        AsClicked() {
            console.log(this.email);
            this.email = '';
        }
    }

}
</script>           

<template>
    <div class="content-elevated container-custom text-white">
        <div class="row h-100 align-items-center p-5">
            <div class="col-7">
                <h1>Subscribe Newsletter</h1>
                <p>Lorem ipsum dolor sit amet, elit. Quisquam dolorem usquasest
                    pariaturusto iusto officiis nesciunt,</p>
            </div>
            <div class="col-5">
                <form @submit.prevent="AsClicked" class="input-group mb-3">
                    <input v-model.trim="email" type="email" required class="form-control text-white"
                        placeholder="Enter your email" aria-label="Username" aria-describedby="basic-addon1">
                    <button class="input-group-text" id="basic-addon1">
                        <img src="../../../assets/icon/send-icon.png" class="send p-2" alt="">
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.content-elevated {
    width: 60%;
    position: absolute;
    top: -25%;
    left: 50%;
    transform: translate(-50%);
    height: 30vh;
    background-color: #30415F;
    border-radius: 50px;

    .send {
        background-color: #FFAA5A;
        border-radius: 50%;
    }

    button,
    input {
        background-color: #435374;
        border: 1px solid #617190;
        border-right: 0;
        border-radius: 15px;
        color: #fff;
    }

    button {
        cursor: pointer;
    }

    ::placeholder {
        color: rgba(255, 255, 255, 0.653);
    }
}
</style>