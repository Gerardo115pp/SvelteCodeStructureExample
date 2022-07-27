<script>
    import discord_svg from '../../icons/discord.svg';
    import twitter_svg from '../../icons/twitter.svg';
    import instagram_svg from '../../icons/instagram.svg';
    import { onMount } from 'svelte';
    import { link } from "svelte-spa-router";
    let links = [];

    onMount(() => {
        fetch('/resources/data/links.json')
            .then(promise => promise.json())
            .then(data => {
                links = data;
            });
    })

    const packLinks = () => {
        const packet_size = 3;
        let packaged_links = [];
        for(let h = 2; h<links.length; h+=packet_size) {
            packaged_links.push(links.slice(h-(packet_size-1), h+1));
        }

        return packaged_links;
    }

</script>

<footer id="keystone-page-footer">
    <div id="kpf-logos">
        <div id="kpf-logos-keystone">
            <a href="/" >
                <img src="/resources/images/logos/Logo-original.webp" alt="keystone logo">
            </a>
        </div>
        <div id="kpf-social-logos">
            <a href="https://www.mc-market.org/threads/627087/" target="_blank">
                <img src="/resources/favicon/favicon-16x16.png" alt="keystone facebook logo">
            </a>
            <a href="https://discord.com/invite/MeWezdG" target="_blank">
                {@html discord_svg}
            </a>
            <a href="https://twitter.com/keystone_builds" target="_blank">
                {@html twitter_svg}
            </a>
            <a href="https://www.instagram.com/keystone_building/" target="_blank">
                {@html instagram_svg}
            </a>
        </div>
    </div>
    <div id="kpf-links">
        {#if links.length > 0}
             {#each packLinks() as link_packet}
                <div class="kpf-link-packet">
                    {#each link_packet as achor_link}
                        <a href="{achor_link.url}" use:link>
                            {achor_link.name}
                        </a>
                    {/each}
                </div>
             {/each}
        {/if}
    </div>
</footer>

<style>
    footer#keystone-page-footer {
        display: grid;
        width: 100%;
        height: var(--footer-height);
        background-color: var(--dark-color);
        color: var(--clear-color);
        padding: 0 1vw;
        grid-template-columns: [logos] 1fr [navs] 2fr;
        z-index: 2;
        margin-top: 9vh;
    }

    #kpf-logos {
        grid-area: 1 / logos / 3 / logos;
        
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

    }

    #kpf-logos-keystone img {
        width: 7vh;
    }

    #kpf-social-logos {
        --social-links-color: #fff;
        --social-links-size: 3ex;

        width: 60%;
        display: flex;
        justify-content: space-around;
    }
    
    #kpf-social-logos > a > img{
        width: calc(var(--social-links-size) - .7ex);

    }

    :global(#kpf-social-logos a svg) {
        width: var(--social-links-size);
        fill: var(--social-links-color);
    }

    #kpf-links {
        grid-area: 1 / navs / 3 / navs;
        display: flex;
        justify-content: space-around;
    }

    .kpf-link-packet {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 1.8vh 0;
    }

    @media only screen and (max-width: 668px) {
        footer#keystone-page-footer {
            margin-top: 4vh;
        }

        #kpf-logos-keystone img {
            width: 10vh;
        }

        .kpf-link-packet {
            font-size: 2.4vw;
        }

        #kpf-links {
            grid-area: 1 / navs / 3 / navs;
            padding: 0 0 0 6vw ;
        }

        #kpf-social-logos {
            width: 30vw;
        }
    }
</style>