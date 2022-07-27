<script>
    import Hero from '../../components/Hero/Hero.svelte';
    import MarketCard from './page-components/MarketItem.svelte';
    import { onMount } from 'svelte';

    let cards_data = [];
    window.scrollTo(0, 0);

    onMount(() => {
        fetch('/resources/data/marketplace_items.json')
            .then(response => response.json())
            .then(data => {
                cards_data = data;
            });
    });

</script>

<main id="marketplace-page-content">
    <Hero hero_title="marketplace" 
        image_url="/resources/images/top_page_banners/3marketplace-M.webp"
        hd_image="/resources/images/top_page_banners/3marketplace-original.webp"
    />
    <div id="mpc-cards-container">
        {#each cards_data as card}
             <MarketCard 
                item_name={card.name} 
                image_url={card.img_url} 
                item_description={card.description}
                item_price={card.price}
             />
        {/each}
    </div>
</main>

<style>
    #mpc-cards-container {
        display: flex;
        flex-wrap: wrap;
        width: 90%;
        justify-content: space-around;
        margin: 8vh auto;
    }

    @media only screen and (max-width: 668px) {
        #mpc-cards-container {
            margin: 0vh auto;
            width: 100%;
        }
    }
</style>