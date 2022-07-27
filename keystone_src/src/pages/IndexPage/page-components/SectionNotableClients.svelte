<script>
    import notable_clients_eye from "../../../icons/NotableClientsEye.svg";
    import notable_clients_icon from "../../../icons/NotableClientsCircle.svg";
    import { link } from "svelte-spa-router";

    const clients = [
        {
            name: "MrBeast Gaming",
            logo: "/resources/images/logos/PokeCentral-original.webp",
            url: "https://www.youtube.com/channel/UCIPPMRA040LQr5QPyJEbmXA"
        },
        {
            name: "MrBeast Gaming",
            logo: "/resources/images/logos/ComplexPixelmon-original.webp",
            url: "https://www.youtube.com/channel/UCIPPMRA040LQr5QPyJEbmXA"
        },
        {
            name: "MrBeast Gaming",
            logo: "/resources/images/logos/SaicoPVP-original.webp",
            url: "https://www.youtube.com/channel/UCIPPMRA040LQr5QPyJEbmXA"
        },
        {
            name: "MrBeast Gaming",
            logo: "/resources/images/logos/LemonCloud-original.webp",
            url: "https://www.youtube.com/channel/UCIPPMRA040LQr5QPyJEbmXA"
        },
        {
            name: "MrBeast Gaming",
            logo: "/resources/images/logos/PokeSaga-original.webp",
            url: "https://www.youtube.com/channel/UCIPPMRA040LQr5QPyJEbmXA"
        },
        {
            name: "MrBeast Gaming",
            logo: "/resources/images/logos/TheArchon-original.webp",
            url: "https://www.youtube.com/channel/UCIPPMRA040LQr5QPyJEbmXA"
        },
    ]
</script>

<article id="home-notable-clients-content">
    <div id="hnc-radagon-icon-wrapper" class="radagon-marika">
        {@html notable_clients_icon}
    </div>
    <div id="hnc-radagon-eye-wrapper" class="radagon-marika">
        {@html notable_clients_eye} 
    </div>
    <h2 id="hnc-title" class="keystone-header-1">Notable <span class="theme-color-text">Clients</span></h2>
    <div id="hnc-examples">
        {#each clients as client}
            <div class="hnc-example">
                <div class="hnc-example-logo-container">
                    <img src={`${client.logo}`} alt="{client.name}" />
                </div>
            </div>
        {/each}
    </div>
    <div id="hnc-clients-calltoaction">
        <a aria-label="go to portfolio page" href="/our-clients" id="hnc-cc-clients-link" class="full-btn" use:link>
            See More
        </a>
    </div>

</article>

<style>
    #home-notable-clients-content {
        display: flex;
        width: 100%;
        flex-direction: column;
        position: relative;
        height: 105vh;
        align-items: center;
        justify-content: center;
    }

    #hnc-title {
        text-align: center;
        margin-top: 13vh;
    }

    #hnc-examples {
        display: flex;
        width: 70%;
        flex-wrap: wrap;
        justify-content: space-around;
        margin: 4vh auto;
        align-items: center;
    }

    .hnc-example {
        width: 30%;
        margin: 3vh 0;
    }

    .hnc-example-logo-container img {
        width: 80%;
        object-fit: cover;
        border-radius: 5px;
    }

    .radagon-marika {
        opacity: 0.5;
        position: absolute;
        z-index: -1;
    }

    #hnc-radagon-icon-wrapper {
        top: 20%;
        left: 80%;
        width: 35vw;
    }

    #hnc-radagon-eye-wrapper {
        top: 0;
        left: -20vw;
        width: 40vw;
    }

    #hnc-clients-calltoaction {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 4vh 0;
    }

    @media only screen and (max-width: 668px) {
        #home-notable-clients-content {
            height: 73vh;
        }

        #hnc-title {
            margin-top: 0vh;
        }

        #hnc-examples {
            width: 100%;
        }

        .hnc-example {
            width: 40%;
        }
        
        #hnc-radagon-icon-wrapper {
            top: 40%;
            left: 80%;
            width: 45vw;
        }

        #hnc-radagon-eye-wrapper {
            top: 7%;
            left: -20vw;
            width: 50vw;
        }


    }
</style>