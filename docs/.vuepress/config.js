module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    //theme: 'antdesign',
    toc: {includeLevel: [1, 2]},
    themeConfig: {

        nav: [
            {text: 'Home', link: '/'},
            {text: 'Guide', link: '/guide/'},
            {text: 'External', link: 'https://google.com'},
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    {text: 'Chinese', link: '/language/chinese/'},
                    {text: 'Japanese', link: '/language/japanese/'}
                ]
            }
        ],

        // sidebar: 'auto',
        sidebarDepth: [1, 2, 3],
        displayAllHeaders: true, // 默认值：false
        sidebar: [
            '/',
            {
                title: 'a',   // 必要的
                path: '/a/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                // sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/a/a1',
                    '/a/a2',
                ]
            },
            {
                title: 'b',   // 必要的
                path: '/b/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                // sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/b/b1',
                    '/b/b2',
                ]
            },
            {
                title: 'Group 2',
                children: [ /* ... */],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            }
        ]


    }
};
