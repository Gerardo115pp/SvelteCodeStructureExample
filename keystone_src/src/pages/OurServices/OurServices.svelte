<script>
    import Hero from '../../components/Hero/Hero.svelte';
    import Carousel from 'svelte-carousel';
    import { link } from 'svelte-spa-router';
    import { server_name } from '../../server_info';

    window.scrollTo(0, 0);
</script>

<main id="our-services-page-content">
    <Hero hero_title="Our Services" 
        image_url="/resources/images/top_page_banners/7our-services-M.webp"
        hd_image="/resources/images/top_page_banners/7our-services-original.webp"
    />
    <div id="ospc-services-wrapper">
        <section class="ospc-service-section-container">
            <div class="ospc-ssc-info-section">
                <div class="ospc-ssc-is-title keystone-header-1">
                    <h3>Skins</h3>
                </div>
                <div class="ospc-ssc-is-desc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, veritatis sint fugiat at voluptas, quas quibusdam enim, assumenda quaerat sunt iste! Molestiae expedita dolores eveniet ipsam facere autem deleniti cumque!
                </div>
                <div class="ospc-ssc-is-controls">
                    <button class="full-btn">
                        <a href="/about-us" use:link>See More</a>
                    </button>
                    <button class="clear-btn">
                        <a href="/about-us">Order Now</a>
                    </button>
                </div>
            </div>
            <div class="ospc-ssc-medias-section round-box">
                <Carousel
                    arrows={false}
                    dots={false}
                    autoplay
                    autoplayDuration={2500}
                >
                    <div class="ospc-ssc-ms-image"><img src="{server_name}/resources/images/Keystone_Renders/1-L.webp" alt=""></div>
                    <div class="ospc-ssc-ms-image"><img src="{server_name}/resources/images/Keystone_Renders/TONY2_12-L.webp" alt=""></div>
                </Carousel>
            </div>
        </section>
        <section class="ospc-service-section-container ospc-ssc-reverse">
            <div class="ospc-ssc-info-section">
                <div class="ospc-ssc-is-title keystone-header-1">
                    <h3>Models</h3>
                </div>
                <div class="ospc-ssc-is-desc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, veritatis sint fugiat at voluptas, quas quibusdam enim, assumenda quaerat sunt iste! Molestiae expedita dolores eveniet ipsam facere autem deleniti cumque!
                </div>
                <div class="ospc-ssc-is-controls">
                    <button class="full-btn">
                        <a href="/about-us" use:link>See More</a>
                    </button>
                    <button class="clear-btn">
                        <a href="/about-us">Order Now</a>
                    </button>
                </div>
            </div>
            <div class="ospc-ssc-medias-section round-box">
                <Carousel
                    arrows={false}
                    dots={false}
                    autoplay
                    autoplayDuration={2500}
                >
                    <div class="ospc-ssc-ms-image"><img src="{server_name}/resources/images/Keystone_Renders/1-L.webp" alt=""></div>
                    <div class="ospc-ssc-ms-image"><img src="{server_name}/resources/images/Keystone_Renders/TONY2_12-L.webp" alt=""></div>
                </Carousel>
            </div>
        </section>
    </div>
</main>

<style>

    #ospc-services-wrapper {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 100%;
    }

    .ospc-service-section-container {
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin: 10vh auto;
    }

    .ospc-ssc-reverse {
        flex-direction: row-reverse;
    }

    .ospc-ssc-info-section {
        display: flex;
        width: 40%;
        flex-direction: column;
        justify-content: space-between;
    }

    .ospc-ssc-is-desc {
        font-size: var(--font-size-2);
    }

    .ospc-ssc-medias-section {
        width: 50%;
        overflow: hidden;
        background: white;
    }

    .ospc-ssc-is-controls {
        display: flex;
        width: 100%;
        justify-content: center;
    }

    .ospc-ssc-is-controls button {
        margin: 0 1vw;
    }


    .ospc-ssc-ms-image img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }

    @media only screen and (max-width: 668px) {

        .ospc-service-section-container {
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            margin: 1vh auto;
        }

        .ospc-ssc-info-section {
            width: 90%;
            margin: 4vh auto 2vh;
            height: 23vh;
        }

        .ospc-ssc-medias-section {
            width: 90%;
        }
        .ospc-ssc-is-desc {
            text-align: center;
        }
    }
</style>