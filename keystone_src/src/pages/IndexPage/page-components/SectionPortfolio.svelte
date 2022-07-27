<script>
    import Carousel from 'svelte-carousel';
    import { link } from 'svelte-spa-router';
    import { isMobile } from '../../../utils';
    let autoplaying = true;
    let carousel = undefined;
    const carousel_images = [
        "0g90kh89g-L.webp",
        "01_logo-L.webp",
        "1-L.webp",
        "1uvUPPPh-M.webp",
        "2k-1-logo%20(1)-L.webp",
        "2k-1-logo-L.webp",
        "3Logo-L.webp",
        "05_logo-L.webp",
        "06_logo-L.webp"
    ];


    const images_path = "/resources/images/Keystone_Renders";


</script>

<article id="home-portfolio-carousel">
    <div id="hpc-background-filter">
        <h2 id="hpc-title" class="keystone-header-1">Check out our projects!</h2>
        <div  id="hp-carousel">
            <Carousel
                bind:this={carousel}
                autoplayDuration={200}
                duration={ autoplaying ? 25000 : 0 }
                autoplay={autoplaying}
                timingFunction="linear"
                dots={false}
                arrows={false}
                swiping={true}
                particlesToShow={isMobile() ? 1.5 : 3}
                particlesToScroll={3}
                infinite={true}
                pauseOnFocus={true}
            >
                {#each carousel_images as image}
                     <div class="hp-carousel-item">
                         <img src={`${images_path}/${image}`} class="round-image" alt="carousel project"/>
                    </div>
                {/each}
            </Carousel>
        </div>
        <div id="hp-portfolio-links">
            <div id="hp-portfolio-links-wrapper">
                <a aria-label="go to portfolio page" href="/portfolio" id="hp-plw-portfolio-link" class="full-btn" use:link>
                    Portfolio
                </a>
            </div>
        </div>
    </div>
</article>

<style>
    #home-portfolio-carousel {
        background-image: url('/resources/images/top_page_banners/nftatlantis-r1-f-logo--original.webp');
        background-size: cover;
        background-position: center;
    }

    #hpc-background-filter {
        --hpc-background-filter-blur: 3px;

        background-color: rgba(255, 255, 255, 0.8);
        width: 100%;
        backdrop-filter: blur(var(--hpc-background-filter-blur));
        -webkit-backdrop-filter: blur(var(--hpc-background-filter-blur));
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        /* border-top: 3px solid rgba(180, 180, 180, 0.27) ;
        border-bottom: 3px solid rgba(180, 180, 180, 0.27) ; */
    }

    #hpc-title {
        margin: 4vh 0;
        text-align: center;
    }

    
    #hp-carousel {
        --hp-carousel-width: 95vw;
        --hp-carousel-height: 36.0825vh;
        width: 100%;
        position: relative;
        height: 40vh;
    }

    .hp-carousel-item {
        height: var(--hp-carousel-height);
        margin: 2.3vh 0.5vw !important;
        z-index: 100;
    }
    
    .hp-carousel-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    #hp-portfolio-links-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 4vh 0;
    }


    @media only screen and (max-width: 668px) {
        .hp-carousel-item {
            min-width: 170vw;
        }
    }
</style>