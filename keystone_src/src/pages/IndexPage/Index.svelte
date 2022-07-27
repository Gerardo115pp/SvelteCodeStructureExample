<script>
    import Hero from '../../components/Hero/Hero.svelte';
    import AboutUsSection from './page-components/SectionAboutUs.svelte';
    import PortfolioSection from './page-components/SectionPortfolio.svelte';
    import MarketplaceSection from './page-components/SectionMarketplace.svelte';
    import BuildStoreSection from './page-components/SectionBuildStore.svelte';
    import Notable_Clients from './page-components/SectionNotableClients.svelte';
    import Reviews from './page-components/SectionReviews.svelte';
    import Contact from './page-components/SectionContact.svelte';
    import { server_name } from '../../server_info.js';
    import { isMobile } from '../../utils';


    window.scrollTo(0, 0);
    console.log(server_name);

    import discord_icon from '../../icons/discord.svg';

</script>


<main id="home-page-content">
    <Hero hero_title="home" is_cover={true} 
        image_url={`${server_name}/resources/images/top_page_banners/nftatlantis-r1-f--M.webp`} 
        hd_image={`${server_name}/resources/images/top_page_banners/nftatlantis-r1-f--original.webp`}
    >
        <div id="home-hero-content">
            <h1 class="hhc-labels text-focus-in"><span class="ppp-color">Keystone</span> Builds</h1>
            <div id="hp-hhc-links">
                <a href="https://discord.com/invite/MeWezdG" class="home-hero-link full-btn text-focus-in">
                    Join our discord
                    <span class="home-hero-link-discord">
                        {@html discord_icon}
                    </span>
                </a>
            </div>
            <div id="hhc-labels-container">
                <h2 class="hhc-labels focus-in-expand">Unlock Your Imagination</h2>
            </div>
        </div>
    </Hero>
    <div class="home-page-section">
        <AboutUsSection />
    </div>
    <div class="home-page-section">
        <PortfolioSection />
    </div>
    <div class="home-page-section">
        <MarketplaceSection />
    </div>
    <div class="home-page-section">
        <BuildStoreSection />
    </div>
    <div class="home-page-section">
        <Notable_Clients />
    </div>
    <div class="home-page-section">
        <Reviews />
    </div>
    <div class="home-page-section">
        <Contact />
    </div>
</main>

<style>
    #home-page-content {
        overflow-x: hidden;
    }

    #home-hero-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    #home-hero-content h1{
        position: relative;
        text-transform: capitalize;
        font-size: var(--font-size-h2);
        line-height: 1.2;
        animation-duration: .7s;
    }

    #hhc-labels-container {
        position: absolute;
        /* margin-top: 20vh; */
        width: 100%;
        top: 76vh;
        font-size: var(--font-size-2);
        font-weight: lighter;
        background: linear-gradient(90deg, rgba(236,236,236,0) 0%, rgba(158,156,156,0.4) 50%, rgba(235,235,235,0) 100%); 
        text-align: center;
        padding: 1vh 0;
    }
    
    #hhc-labels-container h2 {
        text-shadow: none !important;
        animation-delay: 1.2s;
    }

    .ppp-color {
        color: var(--theme-color);
        text-transform: uppercase !important;
    }

    .home-page-section:not(:nth-child(2)) {
        margin-top: 10vh;
    }

    .hhc-labels {
        font-weight: bolder;
        text-shadow: 1px 2px 2px #000;
    }
    
    #hp-hhc-links {
        margin-top: 2em;
        color: white;
    }
    
    .home-hero-link {
        display: flex;
        width: 15vw;
        justify-content: space-around;
        font-size: var(--font-size-2) !important;
        align-items: center;
        animation-duration: .8s;
        animation-delay: .6s;
        align-items: center;
        text-transform: capitalize !important;
        
    } 
    
    :global(.home-hero-link-discord) {
        width: 1.5vw;
    }

    :global(.home-hero-link-discord svg) {
        width: 100%;
        fill: white;
    }

    @media only screen and (max-width: 768px) {

        .home-page-section {
            margin-top: 5vh;
        }

        .home-hero-link {
            width: 50vw;
        }

        .home-hero-link-discord {
            width: 8.5vw;
        }

        /* #hhc-labels-container h2 {
            font-size: 1.5vw;
        } */
    }
</style>