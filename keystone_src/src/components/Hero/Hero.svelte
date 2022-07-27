<script>
    import { onMount } from 'svelte';
    import discord_icon from '../../icons/DiscordBtn.svg';

    export let image_url;
    export let hd_image;
    export let hero_title = "Hero";
    export let is_cover = false;

    let image_holder = undefined;

    onMount(() => {
        if (image_url !== undefined) {
            document.querySelector("#keystone-hero-container").style.setProperty('--background-image', `url(${image_url})`);
            if (hd_image !== undefined) {
                image_holder = document.createElement("img");

                image_holder.onload = () => {
                    // alert("HD image loaded");
                    document.querySelector("#keystone-hero-container").style.backgroundImage = `url(${image_holder.src})`;
                };

                image_holder.src = hd_image;
            }
        }
    });
</script>

<div id="keystone-hero-container" class={`${is_cover ? 'khc-cover-hero' : ''}`}>
    <div id="khc-content-wrapper">
        <slot>
            <div id="khc-generic-content">
                <h1 id="khc-generic-hero-title">{hero_title}</h1>
                <a href="https://discord.com/invite/MeWezdG" class="home-hero-link full-btn hhl-discord">
                    {@html discord_icon}
                </a>
            </div>
        </slot>
    </div>
</div>

<style>
    #keystone-hero-container {
        --background-image: "";

        position: relative;
        width: 100%;
        height: calc(var(--hero-height) / 1.7);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-color: var(--dark-color);
        background-image: var(--background-image);
        color: var(--clear-color);
        overflow: hidden;
        object-fit: cover;
    }
    
    #keystone-hero-container.khc-cover-hero {
        height: var(--hero-height);
    }

    #khc-content-wrapper {
        display: flex;
        background-color: rgba(0, 0, 0, 0.397);
        width: 100%;
        height: inherit;
        justify-content: center;
        align-items: center;
    }

    #khc-generic-content {
        width: 90%;
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
        top: 80%;
    }
    #khc-generic-hero-title {
        font-size: var(--font-size-h2);
        font-weight: bold;
        text-transform: uppercase;
        color: var(--clear-color);
        text-shadow: -2px 2px 2px rgba(0, 0, 0, 0.9);
    }

    .home-hero-link.full-btn {
        display: flex;
        width: 11vw;
        height: 5vh;
        justify-content: space-around;
        align-items: center;
        padding: 0;
    }

    :global(.home-hero-link-discord svg) {
        width: 100%;
        fill: white;
    }

    @media only screen and (max-width: 668px) {
        #keystone-hero-container {
            height: calc(var(--hero-height) / 3.5);
        }

        #khc-generic-content {
            top: 55%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        #khc-generic-hero-title {
            font-size: var(--font-size-h2);
        }


        .home-hero-link.full-btn {
            width: 30vw;
            margin-top: 1vh;
            background: transparent;
        }

    }
</style>