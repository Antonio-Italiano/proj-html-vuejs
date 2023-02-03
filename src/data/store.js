import { reactive } from 'vue';

export const store = reactive({
    thumbnels:
    {
        id: 1,
        img: 'blog-item-1',
        time: '10 min',
        visual: '240',
        date: 'Apr 11,2022',
        text: 'Top 5 Most Important Aspects Of Your Game',
    }

})
console.log(store.thumbnels);