const dataIndex = {}
const navElement = [
    {
        text: 'Home',
        url: '#',
        current: true,
    },
    {
        text: 'Games',
        url: '#',
        current: true,
    },
    {
        text: 'Shop',
        url: '#',
        current: false,
    },
    {
        text: 'Pages',
        url: '#',
        current: false,
    },
    {
        text: 'Blog',
        url: '#',
        current: false,
    },
    {
        text: 'Contact',
        url: '#',
        current: false,
    },
]
const platfromElement = [
    {
        title: 'Live Streaming',
        url: 'features-icon-1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi corrupti voluptates.',
    },
    {
        title: 'Great Tournament',
        url: 'features-icon-2',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi corrupti voluptates.',
    },
    {
        title: 'Gaming News',
        url: 'features-icon-3',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi corrupti voluptates.',
    },

]
const cardBattleData = [
    {
        id: '1',
        gamer1Img: 'game-img-1',
        gamer2Img: 'game-img-2',
        game: 'Call Of Deauty',
        date: 'December 25,2022 4:00 PM',
    },
    {
        id: '2',
        gamer1Img: 'game-img-3',
        gamer2Img: 'game-img-4',
        game: 'Legandary Battles',
        date: 'December 25,2022 4:00 PM',
    },
    {
        id: '3',
        gamer1Img: 'game-img-5',
        gamer2Img: 'game-img-6',
        game: 'Nay Corral Gundown',
        date: 'December 25,2022 4:00 PM',
    },
    {
        id: '4',
        gamer1Img: 'game-img-7',
        gamer2Img: 'game-img-8',
        game: 'League Of Legends',
        date: 'December 25,2022 4:00 PM',
    },
]
const countData = [
    {
        id: '1',
        number: '1135',
        text: 'Twitch Streams',
    },
    {
        id: '2',
        number: '44',
        text: 'Total Games',
    },
    {
        id: '3',
        number: '982',
        text: 'Youtube Streams',
    },
    {
        id: '4',
        number: '40',
        text: 'Pro Team',
    },
]
const cardFeedbackData = [
    {
        id: 1,
        vote: 3,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus incidunt, quo',
        user: {
            name: 'kim Ramos',
            url: 'testimonials-image-1',
            country: 'Serbia',
        },
    },
    {
        id: 2,
        vote: 4,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus incidunt, quo',
        user: {
            name: 'kim Ramos',
            url: 'testimonials-image-2',
            country: 'Serbia',
        },
    },
    {
        id: 3,
        vote: 5,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus incidunt, quo',
        user: {
            name: 'kim Ramos',
            url: 'testimonials-image-3',
            country: 'Serbia',
        },
    },
    {
        id: 4,
        vote: 2,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus incidunt, quo',
        user: {
            name: 'kim Ramos',
            url: 'testimonials-image-3',
            country: 'Serbia',
        },
    },
    {
        id: 5,
        vote: 5,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus incidunt, quo',
        user: {
            name: 'kim Ramos',
            url: 'testimonials-image-3',
            country: 'Serbia',
        },
    },


]
const cardNewsData = [
    {
        id: 1,
        img: 'blog-item-1',
        time: '10 min',
        visual: '240',
        date: 'Apr 11,2022',
        text: 'Top 5 Most Important Aspects Of Your Game',
    },
    {
        id: 2,
        img: 'blog-item-2',
        time: '10 min',
        visual: '240',
        date: 'Apr 11,2022',
        text: 'The Rise Of Fantasy Sports And Online Games',
    },
    {
        id: 3,
        img: 'blog-item-3',
        time: '10 min',
        visual: '240',
        date: 'Apr 11,2022',
        text: 'Benefits Of Gaming-PC And Video Games',
    },
    {
        id: 4,
        img: 'blog-item-4',
        time: '10 min',
        visual: '240',
        date: 'Apr 11,2022',
        text: 'The Rise Of Fantasy Sports And Online Games',
    },
    {
        id: 5,
        img: 'blog-item-5',
        time: '10 min',
        visual: '240',
        date: 'Apr 11,2022',
        text: 'Top 5 Most Important Aspects Of Your Game',
    },
    {
        id: 6,
        img: 'blog-item-6',
        time: '10 min',
        visual: '240',
        date: 'Apr 11,2022',
        text: 'The Rise Of Fantasy Sports And Online Games',
    },
]
const links = {

    games: 'Games',
    latest: 'Latest Tournament',
    shop: 'Shop',
    blog: 'Blog',
    contact: 'Contact',

}
const help = {

    faqs: 'Faqs',
    terms: 'Terms',
    privacy: 'Privacy',
}
const follow = {

    facebook: 'Facebook',
    twitter: 'Twitter',
    instagram: 'Instagram',
    youtube: 'Youtube',
    ghitub: 'Ghitub',
}
const location = {

    address: '4 Mayfield, Buckden,',
    code: 'PE19 5SZ',
}
const phone = {
    number: '(302)555-0107',
}


export {
    dataIndex, navElement, platfromElement,
    cardBattleData, countData, cardFeedbackData,
    cardNewsData, links, help, follow, location, phone
};