import { createRouter, createWebHistory } from "vue-router";
import ListView from '@/components/ListView.vue';
import CreatePost from '@/components/CreatePost.vue';
import PostView from '@/components/PostView.vue';

// vue 에서 화면을 연결하는 경우 활용
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'List',
            component: ListView,
            props: true,
        },
        {
            path: '/html',
            name: 'Html',
            component: ListView,
            props: true,
        },
        {
            path: '/css',
            name: 'Css',
            component: ListView,
            props: true,
        },
        {
            path: '/js',
            name: 'Js',
            component: ListView,
            props: true,
        },
        {
            path: '/vue',
            name: 'Vue',
            component: ListView,
            props: true,
        },
        {
            path: '/etc',
            name: 'Etc',
            component: ListView,
            props: true,
        },
        {
            path: '/create',
            name: 'Create',
            component: CreatePost,
        },
        {
            path: '/post',
            name: 'Post',
            component: PostView,
            props: true,
        },
        
    ]
});

export default router;