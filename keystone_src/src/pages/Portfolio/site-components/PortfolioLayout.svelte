<script>
        import LazyImageLoader from '../../../components/LazyLoader/LazyLoader.svelte';
        export let portfolio_items = [];
        export let image_click_callback = () => {};
        
        const card_size_classes = [
            'plc-card-small',
            'plc-card-medium',
            'plc-card-large',
        ];

        const getRandomCardSize = () => card_size_classes[Math.floor(Math.random() * card_size_classes.length)];
</script>

<div id="portfolio-leyout-content">
    {#each portfolio_items as project}
        <LazyImageLoader className={`plc-layout-card ${getRandomCardSize()}`} image_url="{`/resources/images/Keystone_Renders/${project.thumbnail_image}`}">
            <img on:click={() => image_click_callback(project)} slot="lazy-wrapper-image"  let:image_src src={image_src} alt="" class="round-image"/>
        </LazyImageLoader>
    {/each}
</div>

<style>
    #portfolio-leyout-content {
        --plc-card-width: calc((100% / 3));
        --plc-row-increment: 1.2vh;
        --plc-card-border-radius: var(--boxes-roundness);
        --card-small: 26;
        --card-medium: 36;
        --card-large: 46;

        display: grid;
        grid-template-columns: repeat(auto-fill, var(--plc-card-width));
        grid-auto-rows: var(--plc-row-increment);
        justify-content: center;
        width: 80%;
        margin: 10vh auto 0;
    }

    :global(.plc-layout-card) {
        cursor: pointer;
        width: 97%;
        margin: 3%;
        border-radius: var(--plc-card-border-radius);
        transition: all 0.3s ease-in-out;
    }

    :global(.plc-layout-card img) {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }


    :global(.plc-card-small) {
        grid-row-end: span var(--card-small);
    }

    :global(.plc-card-medium) {
        grid-row-end: span var(--card-medium);
    }

    :global(.plc-card-large) {
        grid-row-end: span var(--card-large);
    }

    @media (pointer: fine) {
        :global(.plc-layout-card:hover) {
            transform: scale(1.05);
        }
    }

    @media only screen and (max-width: 668px) {
        #portfolio-leyout-content {
            --plc-card-width: 50%;
            width: 98%;
        }
    }

</style>