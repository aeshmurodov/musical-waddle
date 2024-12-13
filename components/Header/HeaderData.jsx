export const headerData = {
    logo: 'Название компании',
    menu: [
        {
            label: 'Основная навигация',
            link: '#',
        },
        {
            label: 'Выпадающее меню',
            link: '#',
            submenu: [
                { label: 'Пункт 1', link: '#' },
                { label: 'Пункт 2', link: '#' },
                { label: 'Пункт 3', link: '#' },
                { label: 'Пункт 4', link: '#' },
                { label: 'Пункт 5', link: '#' },
            ],
        },
        {
            label: 'С подменю',
            link: '#',
            submenu: [
                {
                    label: 'Пункт 1',
                    link: '#',
                    navdropdown: [
                        { label: 'Подпункт 1', link: '#' },
                        { label: 'Подпункт 2', link: '#' },
                    ],
                },
                {
                    label: 'Пункт 2',
                    link: '#',
                    navdropdown: [
                        { label: 'Подпункт 1', link: '#' },
                        { label: 'Подпункт 2', link: '#' },
                    ],
                },
                {
                    label: 'Пункт 3',
                    link: '#',
                    navdropdown: [
                        { label: 'Подпункт 1', link: '#' },
                        { label: 'Подпункт 2', link: '#' },
                    ],
                },
            ],
        },
    ]
};