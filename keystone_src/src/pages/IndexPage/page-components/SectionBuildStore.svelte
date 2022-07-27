<script>
    import { isMobile } from '../../../utils'; 
    import StoreItemCard from '../../BuildStore/page-components/StoreItemCard.svelte';
    import { onMount } from "svelte";
    import { link } from 'svelte-spa-router';
    
    let store_products = [];
    let store_categories = [];
    let current_category = undefined;
    $: category_items = getCurrentCategoryProducts(current_category);

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
        getStoreCategories()
    });


    const getStoreCategories = () => {
        fetch(`${ecwid_api_url}/categories`, { method: 'GET', headers: headers})
            .then(response => response.json())
            .then(categories_data => {
                store_categories = categories_data.items;
                getStoreItems();
            })
        }
        
        const getStoreItems = () => {
            fetch(`${ecwid_api_url}/products`, {headers: headers, method: 'GET'})
            .then(promise => promise.json())
            .then(json_data => {
                store_products = json_data.items;
                current_category = store_categories[0];
                console.log(store_products);
            });
    }

    const getCurrentCategoryProducts = category_id => {
        if (current_category === undefined) return [];

        let products = store_products.filter(product => product?.categoryIds?.includes(current_category.id));
        return products;
    }


    const handleCategoryChange = index => {
        if (index < store_categories.length) {
            current_category = store_categories[index];
        }
    }

</script>

<article id="home-build-store-content">
    <div id="hbs-content-wrapper">
        {#if !isMobile()}
             <div id="hbs-cw-left">
                 <div id="hbs-cw-left-image-wrapper">
                     <img src="/resources/images/build_store/ShoppingCartRender-original.webp" alt="bear">
                 </div>
             </div>
        {/if}
        <div id="hbs-cw-right">
            <div id="hbs-title" class="keystone-header-1">Build Store</div>
            <div id="hbs-item-cards">
                {#if category_items.length > 0}
                     {#each category_items.slice(0,2) as product}
                        <StoreItemCard 
                            thumbnailUrl={product.thumbnailUrl}
                            product_name={product.name}
                            product_price={product.price}
                            price_formatter={price_formatter}
                        />
                     {/each}
                {/if}
            </div>
            <div id="hbs-call-to-action">
                <a href="/build-store" use:link>
                    <button class="full-btn">
                        Go to Build Store
                    </button>
                </a>
            </div>
        </div>
    </div>
</article>

<style>

    #home-build-store-content {
        background: url('/resources/images/top_page_banners/4store-original.webp');
        background-size: cover;
        background-position: center;
        height: calc(102vh - var(--navbar-height));
    }
    
    #hbs-content-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.5);
        /* backdrop-filter: blur(2px); */
        padding: 2vh 0;
    }
    
    #hbs-cw-left-image-wrapper {
        width: 35vw;
    }
    
    #hbs-cw-left-image-wrapper img {
        width: 100%;
    }

    #hbs-cw-right {
        width: 70vw;
    }
    
    #hbs-title {
        text-align: center;
        color: #2F1160;
    }
    
    #hbs-item-cards {
        --hbs-card-border-color: #dfdfdf;
        
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin-top: 3vh;
    }
    

    #hbs-call-to-action {
        display: flex;
        height: 12vh;
        justify-content: center;
        align-items: center;
    }

    @media only screen and (max-width: 668px) {

        #home-build-store-content {
            height: max-content;
        }

        #hbs-cw-right {
            width: 90vw;
        }
    }
</style>