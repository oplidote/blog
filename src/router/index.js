import { createRouter, createWebHistory } from "vue-router";
import ListView from '@/components/ListView.vue';
import CreatePost from '@/components/CreatePost.vue';

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
            path: '/create',
            name: 'Create',
            component: CreatePost,
        },
        
    ]
});

export default router;