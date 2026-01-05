import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Home } from './home/home';
import { Login } from './login/login';
import { Register } from './register/register';

export const routes: Routes = [
    {
        path: "",
        component: Layout,
        children:[
             {
        path: "home",
        component: Home
    },
    {
        path: "login",
        component: Login
    },
    {
        path: "register",
        component: Register
    }
        ]
    },
    
];
