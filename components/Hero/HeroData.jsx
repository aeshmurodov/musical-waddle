import AgencyImage from '@/public/images/col-3-square.jpg';
import BackgroundImage from '@/public/images/background.jpg';
import Avatar from '@/public/images/client-avatar.jpg';
import Image from '@/public/images/col-3-square.jpg';

export const heroData = {
    agency: {
        name: "Цифровое агентство",
        jobTitle: "Текст с обводкой",
        image: AgencyImage,
        description: "Лорем ипсум, долор сит амет, консеcтетур адиписицинг элит. Дебитис ullam voluptatem",
        letsTalkUrl: "#",
    },
    business: {
        title: 'Мы помогаем новаторам успешно запустить их бизнес',
        description: 'Лорем ипсум долор сит амет, консеcтетур адиписицинг элит. Аними архитектo беатэ долорибус одио нулла веро импедит quam omnis amet est! Ex ratione',
        backgroundImage: BackgroundImage,
        youtubeVideoUrl: 'https://www.youtube.com/watch?v=W-j4QGAgNu8',
        countOfClients: '4,000',
        avatars: [
            {
                name: 'аватар1',
                avatar: Avatar,
            },
            {
                name: 'аватар2',
                avatar: Avatar,
            },
            {
                name: 'аватар3',
                avatar: Avatar,
            },
            {
                name: 'аватар4',
                avatar: Avatar,
            },
            {
                name: 'аватар5',
                avatar: Avatar,
            },
        ]
    },
    corporate: {
        title: 'Создаём лучшие решения для вашего бизнеса',
        backgroundImage: BackgroundImage,
        learnMoreUrl: '#',
        features1: [
            { title: 'Лорем ипсум долор сит амет, консеcтетур' },
            { title: 'Аенэан commodo ligula eget dolor' },
            { title: 'Cum sociis natoque penatibus et magnis' },
        ],
        features2: [
            { title: 'Аенэан commodo ligula eget dolor' },
            { title: 'Лорем ипсум долор сит амет, консеcтетур' },
            { title: 'Cum sociis natoque penatibus' },
        ]
    },
    portfolio: {
        title: 'Хороший дизайн очевиден',
        title2: 'Отличный дизайн прозрачен',
    },
    startup: {
        title: 'Лорем ипсум долор сит амет консеcтетур адиписицинг элит. Omnis quaerat',
        description: 'Лорем, ипсум долор сит амет консеcтетур адиписицинг элит. In minus quasi eos doloribus soluta animi incidunt molestiae inventore minima mollitia vel quos aut, obcaecati officiis error. Fugiat aliquam cupiditate enim.',
        learnMoreUrl: '#',
    },
    marketing: {
        titleSpan1: 'Цифровой',
        titleSpan2: 'Маркетинг',
        titleSpan3: 'Сервис',
        titleSpan4: 'Агентство',
        countOfClients: '4,000',
        avatars: [
            {
                name: 'аватар1',
                avatar: Avatar,
            },
            {
                name: 'аватар2',
                avatar: Avatar,
            },
            {
                name: 'аватар3',
                avatar: Avatar,
            },
            {
                name: 'аватар4',
                avatar: Avatar,
            },
            {
                name: 'аватар5',
                avatar: Avatar,
            },
        ]
    },
    aboutPage: {
        mainData: {
            title: "Создаём лучшие решения для вашего бизнеса",
            image: Image,
            countOfClients: '4,000',
        },
        features1: [
            {name: 'Лорем ипсум долор сит амет, консеcтетур'},
            {name: 'Аенэан commodo ligula eget dolor'},
            {name: 'Cum sociis natoque penatibus et magnis'},
        ],
        features2: [
            {name: 'Аенэан commodo ligula eget dolor'},
            {name: 'Лорем ипсум долор сит амет, консеcтетур'},
            {name: 'Cum sociis natoque penatibus'},
        ],
        avatars: [
            {
                name: 'аватар1',
                avatar: Avatar,
            },
            {
                name: 'аватар2',
                avatar: Avatar,
            },
            {
                name: 'аватар3',
                avatar: Avatar,
            },
            {
                name: 'аватар4',
                avatar: Avatar,
            },
            {
                name: 'аватар5',
                avatar: Avatar,
            },
        ]
    }
};
