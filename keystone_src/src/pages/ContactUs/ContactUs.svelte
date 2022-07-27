<script>
    import Hero from "../../components/Hero/Hero.svelte";
    import SocialMedias from "./page-components/ContactSocialsSection.svelte";
    import { link } from "svelte-spa-router";
    import viewport from "../../components/LazyLoader/actions/useViewPortAction";

    window.scrollTo(0, 0);
</script>


<main id="contact-us-page-content">
    <Hero hero_title="Contact Us" image_url="/resources/images/top_page_banners/5contact-us-original.webp"/>
    <div class="contact-page-section">
        <SocialMedias />
    </div>
    <div class="contact-page-section">
        <article id="cupc-careers-section">
            <div id="cupc-careers-subjects">
                <section class="cupc-careers-subject round-box">
                    <h3 class="keystone-header-1">Why Join Us?</h3>
                    <div class="hau-dw-loader-line" use:viewport on:viewportEnter={e => e.target?.classList.add('loadbar-left-right')}></div>
                    <p class="cupc-careers-subject-desc">
                        Growing community of passionate people with a transparent leadership! Showcase your projects with us and work for large servers and clients. Prepare to get busy with non stop commissions! Use our own private building server with all the tools you'll need. Click on Apply to see more advtanges and what our team thinks about us!
                    </p>
                    <div class="cupc-careers-calltoaction-wrapper">
                        <button class="cupc-careers-calltoaction full-btn">
                            Apply
                        </button>
                    </div>
                </section>
                <section id="cupc-cs-talk"  class="cupc-careers-subject round-box">
                    <h3 class="keystone-header-1">Let's Talk!</h3>
                    <div class="hau-dw-loader-line" use:viewport on:viewportEnter={e => e.target?.classList.add('loadbar-left-right')}></div>
                    <p class="cupc-careers-subject-desc">
                        Are you interested in ordering something from one of the services we offer? Feel free to submit a form and let us know! We can make you anything from Minecraft Building, Plugin Development, CommandBlock Systems, Resource Packs, 3D Models, Minecraft Skins, NFT Worlds or even Sandbox related projects!
                    </p>
                    <div class="cupc-careers-calltoaction-wrapper">
                        <button class="cupc-careers-calltoaction full-btn">
                            Submit a Form
                        </button>
                    </div>
                </section>
            </div>
        </article>
    </div>
</main>

<style>

    #cupc-careers-subjects {
        --cupc-careers-subject-height: 20vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-top: var(--font-size-h1);
        
    }
    
    .cupc-careers-subject {
        --hau-title-font-size: var(--font-size-h2);

        width: 66%;
        margin-top: 13vh;
        padding: 2vh 4vw;
    }

    .cupc-careers-subject:first-child {
        margin-top: 1vh;
    }
    
    #cupc-cs-talk .hau-dw-loader-line {
        width: calc(calc(var(--hau-title-font-size) * 0.68) * 8); 
    }

    .hau-dw-loader-line {
        width: calc(calc(var(--hau-title-font-size) * 0.68) * 11); 
        /* 7 is the number of letters in the title */
        height: 1ex;
        background-color: var(--theme-color);
        margin: 0 auto 0.4vh !important;
    }   

    .cupc-careers-subject * {
        text-align: center;
        margin-top: 3vh;
    }
    
    .cupc-careers-subject h3 {
        font-size: var(--hau-title-font-size);
    }



    .cupc-careers-subject p {
        font-size: var(--font-size-2);
    }
    
    @media only screen and (max-width: 668px) {
        
        .cupc-careers-subject {

            width: 90%;
        }

        #cupc-cs-talk .hau-dw-loader-line {
            width: calc(calc(var(--hau-title-font-size) * 0.68) * 7); 
        }

        .hau-dw-loader-line {
            width: calc(calc(var(--hau-title-font-size) * 0.68) * 10); 
        }

        .cupc-careers-subject h3 {
            font-size: var(--font-size-h2);
        }
    
        .cupc-careers-subject p {
            font-size: var(--font-size-2);
        }
    }
</style>