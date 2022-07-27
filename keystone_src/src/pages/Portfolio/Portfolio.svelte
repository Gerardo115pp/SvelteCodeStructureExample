<script>
    import Hero from '../../components/Hero/Hero.svelte';
    import { onMount } from 'svelte';
    import PortfolioLayout from './site-components/PortfolioLayout.svelte';
    import FullImageModal from './site-components/FullImageModal.svelte';

    window.scrollTo(0, 0);

    let portfolio_data = {};
    let portfolio_filter = '';
    $:portfolio_items =  getFilteredPortfolio(portfolio_filter);

    let selected_image_src = undefined;

    onMount(() => {
        fetch('/resources/data/portfolio.json')
            .then(promise => promise.json())
            .then(response => {
                portfolio_data = response;
                portfolio_filter = 'all';
            });
    });

    const getFilteredPortfolio = filter => {
        const filtered_portfolio = [];
        portfolio_data?.projects?.forEach(project => {
            if (filter === 'all' || project.topics.includes(filter)) {
                filtered_portfolio.push(project);
            }
        })
        console.log(filtered_portfolio);

        return filtered_portfolio;
    };

    const handleFilterClick = e => {
        const { target:filter } = e;
        const filter_name = filter.getAttribute('filter-name');
        if (filter_name !== undefined) {
            portfolio_filter = filter_name;
        }
    }

</script>


<main id="portfolio-page-content">
    <Hero hero_title="portfolio" 
        image_url="/resources/images/top_page_banners/2portfolio-M.webp"
        hd_image="/resources/images/top_page_banners/2portfolio-original.webp"
    />
    <section id="ppc-filters-panel">
        <div class="ppc-filters-background-wrapper">
            <ul on:click={handleFilterClick} id="pcc-fp-filters-wrapper">
                <li filter-name="all"  role="button" class={`pcc-fp-fw-filter ${ portfolio_filter === 'all' ? 'full-btn pcc-fp-fw-filter-active' : 'clear-btn pcc-fp-fw-filter-unactive'}`}>
                    All
                </li>
                {#if portfolio_data?.topics?.length > 0}
                    {#each portfolio_data.topics as topic}
                        <li filter-name={topic} role="button" class={`pcc-fp-fw-filter ${portfolio_filter === topic ? 'full-btn' : 'clear-btn pcc-fp-fw-filter-unactive'}`}>
                            {topic.replace("_", " ")}
                        </li>
                    {/each}
                {/if}
            </ul>
        </div>
    </section>
    <section id="ppc-portfolio-wrapper">
        <PortfolioLayout 
            image_click_callback={image_src => selected_image_src = image_src} 
            portfolio_items={portfolio_items}/>
    </section>
    {#if portfolio_items?.length > 0}
         <FullImageModal  image_src={selected_image_src} />
    {/if}
</main>

<style>
    #ppc-filters-panel {
        margin-top: 10vh;
    }
    
    .ppc-filters-background-wrapper {
        background-image: url("/resources/images/top_page_banners/2portfolio-L.webp");
        background-size: cover;
        background-position: center;    
        width: 84%;
        border-radius: 15px;
        margin: 0 auto;
    }
    #pcc-fp-filters-wrapper {
        background-color: rgba(49, 7, 90, 0.689);
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 3vw;
        border-radius: 15px;
    }

    .pcc-fp-fw-filter {
        width: 20%;
        border-radius: calc(var(--boxes-roundness) - 3px);
        margin-top: .8vw;
        margin-right: 2ex;
        text-align: center;
        font-size: var(--font-size-2);
    }

    .pcc-fp-fw-filter-active:hover {
        background-color: var(--theme-color) !important;
        transform: scale(1);
    }

    .clear-btn.pcc-fp-fw-filter-unactive:hover {
        background-color: var(--theme-color);
        border: none;
        transform: scale(1.05);
    }

    @media only screen and (max-width: 668px) {
        #ppc-filters-panel {
            margin-top: 5vh;
        }
        .ppc-filters-background-wrapper {
            width: 98%;
        }

        .pcc-fp-fw-filter {
            font-size: var(--font-size-1) !important;
        }

        .pcc-fp-fw-filter-active {
            padding: 2vw 3vw !important;
        }
    }
</style>