import HomeView from "./components/HomeView.vue";
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";
import AddRestaurant from "./components/AddRestaurant.vue"
import UpdateResto from "./components/UpdateResto.vue"
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: 'HomeView',
        component: HomeView,
        path: "/home"
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: "/sign-up"
    },
    {
        name: 'login',
        component: Login,
        path: "/"
    },
    {
        name: 'Add',
        component: AddRestaurant,
        path: "/add-restaurant"
    },
    {
        name: 'Update',
        component: UpdateResto,
        path: "/update-restaurant/:id"
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;