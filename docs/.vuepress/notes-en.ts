/**
 * English Notes Configuration
 * @see https://theme-plume.vuejs.press/guide/document/ View documentation for configuration details.
 *
 * English Notes configuration file, imported in `.vuepress/plume.config.ts`.
 */

import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const NoteEN = defineNoteConfig({
    dir: 'en',
    // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `link` 配置作为前缀
    // 如果 前缀不一致，则无法生成侧边栏。
    // 所以请确保  markdown 文件的 permalink 都以 `link` 开头
    link: '/',

    // 手动配置侧边栏结构
    sidebar: [
        {
            text: 'Getting Started',
            icon: 'ri:book-open-line',
            prefix: '/en/guide/',

            collapsed: false,
            items: [
                {
                    text: 'Introduction',
                    link: 'intro/',
                    icon: 'ri:information-line'
                },
                {
                    text: 'Quick Start',
                    link: 'get-started/',
                    icon: 'ri:rocket-line'
                },
                {
                    text: 'Deployment',
                    link: 'deployment/',
                    icon: 'ri:server-line'
                },
            ],
        },
        {
            text: 'Configuration',
            icon: 'ri:settings-2-line',
            prefix: '/en/config/',

            collapsed: true,
            items: [
                {
                    text: 'Site Config',
                    link: 'core/',
                    icon: 'ri:global-line'
                },
                {
                    text: "CMS Config",
                    link: "cms/",
                    icon: "ri:shield-user-line"
                },
                {
                    text: "Analytics Config",
                    link: "analytics/",
                    icon: "ri:bar-chart-2-line"
                },
                {
                    text: 'Data Config',
                    link: 'data/',
                    icon: 'ri:numbers-line'
                },
                {
                    text: 'Music Config',
                    link: 'music/',
                    icon: 'ri:music-line'
                },
            ]
        },
        {
            text: 'Writing Articles',
            icon: 'akar-icons:pencil',
            prefix: '/en/press/',

            collapsed: true,
            items: [
                {
                    text: 'Files',
                    link: 'file/',
                    icon: 'ri:file-text-line'
                },
                {
                    text: 'Folders',
                    link: 'folder/',
                    icon: 'ri:folder-line'
                },
                {
                    text: "CMS",
                    link: "cms/",
                    icon: "ri:shield-user-line"
                },
            ]
        },
        {
            text: 'Migration Guide',
            icon: 'ri:git-branch-line',
            prefix: '/en/transfer/',

            collapsed: true,
            items: [
                {
                    text: 'Gridea Import',
                    link: 'gridea-import/',
                    icon: 'ri:download-cloud-line'
                },
                {
                    text: 'Halo Migration',
                    link: 'halo-to-twilight/',
                    icon: 'ri:exchange-line'
                },
                {
                    text: 'Hexo Migration',
                    link: 'hexo-to-twilight/',
                    icon: 'ri:exchange-line'
                },
                {
                    text: 'HTML Import',
                    link: 'html-import/',
                    icon: 'ri:html5-line'
                },
                {
                    text: 'Hugo Migration',
                    link: 'hugo-to-twilight/',
                    icon: 'ri:exchange-line'
                },
                {
                    text: 'Jekyll Migration',
                    link: 'jekyll-to-twilight/',
                    icon: 'ri:exchange-line'
                },
                {
                    text: 'Markdown Import',
                    link: 'markdown-import/',
                    icon: 'ri:markdown-line'
                },
                {
                    text: 'Typecho Migration',
                    link: 'typecho-to-twilight/',
                    icon: 'ri:exchange-line'
                },
                {
                    text: 'WordPress Migration',
                    link: 'wordpress-to-twilight/',
                    icon: 'ri:wordpress-line'
                },
                {
                    text: 'Z-Blog Import',
                    link: 'zblog-import/',
                    icon: 'ri:download-cloud-line'
                },
            ]
        },
    ],
});

export default defineNotesConfig({
    dir: 'en',
    link: '/en/',
    notes: [NoteEN],
});