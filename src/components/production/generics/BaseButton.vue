<script>
export default {
    name: 'BaseButton',
    props: {
        placeholder: String,
        href: String,
    },
    emits: ['button-clicked']
}
</script>

<template>
    <div class="border-custom">
        <button @click="$emit('button-clicked')">
            <a :href="href">{{ placeholder }}</a>
        </button>
    </div>
</template>

<style lang="scss"  scoped>
.border-custom {
    width: fit-content;
    border: 1px solid #08CB7B;
    padding: 9px 0;
    border-radius: 25px;
    border: 1px solid #08CB7B;
}

button {
    background-color: transparent;
    border: none;

    a {
        padding: 8px 15px;
        border-radius: 20px;
        margin: -3px;
        color: black;
        text-decoration: none;
        background-color: #08CB7B;
    }
}
</style>