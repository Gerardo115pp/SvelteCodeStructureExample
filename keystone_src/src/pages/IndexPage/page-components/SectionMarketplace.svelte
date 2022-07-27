<script>
    import Carousel from 'svelte-carousel';
    import { link } from 'svelte-spa-router';
</script>

<article id="home-marketplace-content">
    <div id="hm-content-wrapper">
        <div id="hm-image" class="hm-section">
            <img src="/resources/images/marketplace/AMT-L.webp" class="round-image" alt="about us project"/>
        </div>
        <div id="hm-data">
            <div id="hm-data-wrapper">
                <h2 id="hm-data-title" class="keystone-header-1">Marketplace</h2>
                <p id="hm-data-description">
                    We also take on projects for the official Minecraft Marketplace! Inside this department, Keystone works on skins, models, resource packs, creative writing, development and, obviously, maps. Interested in seeing or even buying any of them?
                </p>
                <div id="hm-data-controls">
                    <a href="/marketplace" use:link>
                        <button class="full-btn">
                            Marketplace
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</article>

<style>
    #home-marketplace-content {
        box-sizing: border-box;
        margin-top: 3vh;
        padding: 3vh 8vw;
    }
    
    #hm-content-wrapper{
        display: flex;
        justify-content: space-between;
    }
    
    #hm-image img{
        width: 37.44vw;
    }
    
    #hm-data {
        display: flex;
        width: 50vw;
        align-items: center;
    }

    #hm-data-wrapper {
        width: 90%;
        margin: 0 0 0 auto;
    }

    #hm-data-title {
        margin-bottom: 1vh;
    }

    #hm-data-description {
        font-size: var(--font-size-2);
        width: 100%;
        margin-bottom: 3vh;
        text-align: justify;
        text-justify: inter-word;
    }


    @media only screen and (max-width: 768px) {
        #hm-content-wrapper {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        #hm-image img{
            width: 70vw;
        }

        #hm-data {
            margin-top: 3vh;
            width: 70vw;
        }

        #hm-data-wrapper {
            margin: 0 auto;
        }

        #hm-data-title {
            text-align: center;
            margin-bottom: 3vh;
        }

        #hm-data-description {
            font-size: var(--font-size-2);
            text-align: center;
        }

        #hm-data-controls {
            display: flex;
            justify-content: center;
        }

        #hm-data-controls .full-btn {
            font-size: 3.4vw;
        }
    }
</style>