import HomeView from "./components/HomeView.vue";
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: 'HomeView',
        component: HomeView,
        path: "/"
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: "/sign-up"
    },
    {
        name: 'login',
        component: Login,
        path: "/login"
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;