<script>
    import { onMount } from "svelte";
    import Hero from '../../components/Hero/Hero.svelte';
    import StoreItemCard from './page-components/StoreItemCard.svelte';
    // import Ecommerce from '@ecwid/sdk';

    window.scrollTo(0, 0);

    let store_products = [];

    const ecwid_api_url = 'https://app.ecwid.com/api/v3/76029050';

    const headers = {
        'Accept': 'application/json',
        'Authorization': ECWID_TOKEN,
    };
    
    let price_formatter = new Intl.NumberFormat('es-MX', {
            style: 'currency',
            currency: 'MXN',
            minimumFractionDigits: 2
    });

    onMount(() => {
        getStoreItems();
    });


        
        const getStoreItems = () => {
            fetch(`${ecwid_api_url}/products`, {headers: headers, method: 'GET'})
            .then(promise => promise.json())
            .then(json_data => {
                store_products = json_data.items;
            });
    }

</script>

<main id="store-page-content">
    <Hero hero_title="store" 
        image_url="/resources/images/top_page_banners/4store-M.webp"
        hd_image="/resources/images/top_page_banners/4store-original.webp"
    />
    <div id="spc-products-wrapper">
        {#each store_products as product }
            <StoreItemCard
                thumbnailUrl={product.thumbnailUrl}
                product_name={product.name}
                product_price={product.price}
                price_formatter={price_formatter}
            />
        {/each}
    </div>
</main>

<style>
    #store-page-content {
        min-height: calc(100vh - var(--navbar-height) - var(--footer-height));
    }

   #spc-products-wrapper {
        display: flex;
        width: 80%;
        margin: 1rem auto;
        flex-wrap: wrap;
        justify-content: space-between;
    }

</style>
