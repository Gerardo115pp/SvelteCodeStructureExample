import IndexPage from './pages/IndexPage/Index.svelte';
import ContactUsPage from './pages/ContactUs/ContactUs.svelte';
import Marketplace from './pages/Marketplace/Marketplace.svelte';
import Portfolio from './pages/Portfolio/Portfolio.svelte';
import AboutUsPage from './pages/AboutUs/AboutUs.svelte';
import BuildStore from './pages/BuildStore/BuildStore.svelte';
import OurServices from './pages/OurServices/OurServices.svelte';
import NotableClients from './pages/NotableClients/NotableClients.svelte';

const routes = {
    '/': IndexPage,
    '/contact-us': ContactUsPage,
    '/marketplace': Marketplace,
    '/portfolio': Portfolio,
    '/about-us': AboutUsPage,
    '/build-store': BuildStore,
    '/our-services': OurServices,
    '/our-clients': NotableClients
}

export { routes };