<script>
    import Hero from "../../components/Hero/Hero.svelte";
    import NotableClientsBanner from "./site-components/NotableClientsBanner.svelte";
    import notable_clients_eye from "../../icons/NotableClientsEye.svg";
    import notable_clients_icon from "../../icons/NotableClientsCircle.svg";
    import { onMount } from "svelte";

    let notable_clients = {
        minecraft_servers: [],
        content_creators: []
    }

    onMount(() => {
        const request = new Request('/resources/data/notable_clients.json');
        fetch(request)
            .then(response => response.json())
            .then(data => {
                notable_clients = data;
            });
    })

    window.scrollTo(0, 0);

</script>

<main id="notable-client-page-content">
    <Hero hero_title="Notable Clients" 
        image_url="/resources/images/top_page_banners/6about-us-M.webp"
        hd_image="/resources/images/top_page_banners/6about-us-original.webp"
    />
    <NotableClientsBanner/>
    <div id="notable-clients-wrapper">
        <div id="hnc-radagon-icon-wrapper" class="radagon-marika">
            {@html notable_clients_icon}
        </div>
        <div id="hnc-radagon-eye-wrapper" class="radagon-marika">
            {@html notable_clients_eye} 
        </div>
        <div id="hnc-radagon-order-wrapper" class="radagon-marika">
            {@html notable_clients_icon}
        </div>
        <div id="hnc-radagon-law-wrapper" class="radagon-marika">
            {@html notable_clients_eye} 
        </div>
        <section class="notable-clients-container" id="client-servers">
            <h2>Minecraft Servers</h2>
            <div class="ncw-ncc-clients">
                {#each notable_clients.minecraft_servers as client}
                    <div class="ncw-ncc-cient-container">
                        <a href="{client.link}" target="_blank" rel="noopener noreferrer">
                            <img src="{client.image}" alt="{client.name}">
                            <h3>{client.name}</h3>
                        </a>
                    </div>
                {/each}
            </div>
        </section>
        <section class="notable-clients-container" id="client-content-creators">
            <h2>Content Creators</h2>
            <div class="ncw-ncc-clients">
                {#each notable_clients.content_creators as client}
                    <div class="ncw-ncc-cient-container">
                        <a href="{client.link}" target="_blank" rel="noopener noreferrer">
                            <img src="{client.image}" alt="{client.name}">
                            <h3>{client.name}</h3>
                        </a>
                    </div>
                {/each}
            </div>
        </section>
    </div>
</main>

<style>
    
    /* #notable-client-page-content * {
        border: 1px solid red;
    } */

    #notable-client-page-content {
        width: 100vw;
        max-width: 100%;
        overflow: hidden;
        height: max-content;
    }

    #notable-clients-wrapper {
        position: relative;
    }   

    .radagon-marika {
        opacity: 0.5;
        position: absolute;
        z-index: -1;
    }

    #hnc-radagon-eye-wrapper {
        top: 0;
        left: -20vw;
        width: 40vw;
    }

    #hnc-radagon-icon-wrapper {
        top: 20%;
        left: 80%;
        width: 35vw;
    }


    #hnc-radagon-order-wrapper {
        top: 40%;
        left: -20vw;
        width: 40vw;
    }

    #hnc-radagon-law-wrapper {
        top: 70%;
        left: 80%;
        width: 35vw;
    }
    
    .notable-clients-container {
        --notable-clients-container-width: 99vw;
        width: var(--notable-clients-container-width);
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 15vh;
    }

    .notable-clients-container h2 {
        font-size: var(--font-size-h1);
        font-weight: bold;
        margin-bottom: 2rem;
    }
    
    .ncw-ncc-clients {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
    }

    .ncw-ncc-cient-container {
        --client-container-width: calc(var(--notable-clients-container-width) / 10);
        width: calc(var(--client-container-width) + calc(var(--client-container-width) * 0.1));
        margin: calc(var(--client-container-width) * 0.3);
    }

    .ncw-ncc-cient-container a {
        width: 100%;
    }

    .ncw-ncc-cient-container a img {
        width: 100%;
        object-fit: cover;
        border-radius: 50%;
    }

    .ncw-ncc-cient-container a h3 {
        font-size: var(--font-size-3);
        font-weight: bold;
        margin-top: 1rem;
        text-align: center;
    }


    @media only screen and (max-width: 668px) {
        .ncw-ncc-cient-container {
            --client-container-width: calc(var(--notable-clients-container-width) / 5);
            width: calc(var(--client-container-width) + calc(var(--client-container-width) * 0.1));
            margin: calc(var(--client-container-width) * 0.3);
        }

        .radagon-marika {
            opacity: 0.5;
            position: absolute;
            z-index: -1;
        }

        #hnc-radagon-eye-wrapper {
            top: 6%;
            left: -20vw;
            width: 70vw;
        }

        #hnc-radagon-icon-wrapper {
            top: 20%;
            left: 80%;
            width: 55vw;
        }


        #hnc-radagon-order-wrapper {
            top: 47%;
            left: -20vw;
            width: 55vw;
        }

        #hnc-radagon-law-wrapper {
            top: 70%;
            left: 60%;
            width: 75vw;
        }
    }

</style>