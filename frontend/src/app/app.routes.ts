import { Routes } from '@angular/router';
import { Homepage } from './page/homepage/homepage';
import { Cartpage } from './page/cartpage/cartpage';
import { Paymentpage } from './page/paymentpage/paymentpage';

export const routes: Routes = [
    {path:'',component:Homepage},
    {path:'cart',component:Cartpage},
    {path:'payment',component:Paymentpage},
    
];
