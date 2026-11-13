import { Routes } from '@angular/router';
import { AboutUs } from './pages/about-us/about-us';
import { CompanyProfile } from './pages/company-profile/company-profile';
import { Home } from './pages/home/home';
import { RequestQuote } from './pages/request-quote/request-quote';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Naveen Engineering Technology | Home',
  },
  {
    path: 'about',
    component: AboutUs,
    title: 'Naveen Engineering Technology | About Us',
  },
  {
    path: 'company-profile',
    component: CompanyProfile,
    title: 'Naveen Engineering Technology | Company Profile',
  },
  {
    path: 'request-quote',
    component: RequestQuote,
    title: 'Naveen Engineering Technology | Request a Quote',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
