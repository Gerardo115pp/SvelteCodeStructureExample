<script>
    import discord_svg from '../../../icons/discord.svg';
    import twitter_svg from '../../../icons/twitter.svg';
    import instagram_svg from '../../../icons/instagram.svg';

    const returnRandomDelay = () => {
        return Math.random();
    }
</script>

<article id="contact-us-social-medias">
    <h2 id="hau-data-title" class="keystone-header-1">Social Media</h2>
    <ul id="cusm-social-medias-container">
        <li class="cusm-social-link bounce-in-top" style="animation-delay: {returnRandomDelay()}s;"  id="cusm-sl-mc-market">
            <a href="https://www.mc-market.org/threads/627087/" target="_blank">
                <img src="/resources/images/mc_market_white-original.webp" alt="Facebook" />
            </a>
        </li>
        <li class="cusm-social-link bounce-in-top" style="animation-delay: {returnRandomDelay()}s;" id="cusm-sl-discord">
            <a aria href="https://discord.com/invite/MeWezdG" target="_blank">
                {@html discord_svg}
            </a>
        </li>
        <li class="cusm-social-link bounce-in-top" style="animation-delay: {returnRandomDelay()}s;" id="cusm-sl-twitter">
            <a href="https://twitter.com/keystone_builds" target="_blank">
                {@html twitter_svg}
            </a>
        </li>
        <li class="cusm-social-link bounce-in-top" style="animation-delay: {returnRandomDelay()}s;" id="cusm-sl-instagram">
            <a href="https://www.instagram.com/keystone_building/" target="_blank">
                {@html instagram_svg}
            </a>
        </li>
    </ul>
</article>

<style>

    #contact-us-social-medias {
        background: var(--purple-gradient-color);
        color: var(--clear-color);
        padding: 4vh 0;
        box-shadow: inset 0px -1px 10px 3px rgba(0, 0, 0, 0.4);
    }

    #hau-data-title {
        text-align: center;
    }
    #cusm-social-medias-container {
        --cusm-link-size-media: 6.5rem;
        --cusm-link-width: 9.1vw;
        --cusm-link-height: var(--cusm-link-width);

        display: flex;
        width: 80%;
        justify-content: space-around;
        align-items: center;
        margin: 2rem auto;
    }

    .cusm-social-link {
        background-color: blue; 
        display: flex;
        width: var(--cusm-link-width);
        height: var(--cusm-link-height);
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
        animation-duration: 1s;
    }

    .cusm-social-link img {
        width: var(--cusm-link-size-media);
    }

    :global(.cusm-social-link svg) {
        width: var(--cusm-link-size-media);
        fill: var(--clear-color);
    }

    #cusm-sl-mc-market {
        background-color: #2e88c6;
    }

    #cusm-sl-discord {
        background-color: #5661f5;
    }

    #cusm-sl-twitter {
        background-color: #1c98ec;
    }

    #cusm-sl-instagram {
        background-color: #e52765;
    }

    @media only screen and (max-width: 668px) {

        #cusm-social-medias-container {
            --cusm-link-width: 18vw;;
            padding: 0 1vw;
        }

        .cusm-social-link img {
            width: calc(var(--cusm-link-size-media) * 0.4);
        }
        
        :global(.cusm-social-link svg) {
            width: calc(var(--cusm-link-size-media) * 0.4);
        }
    }
</style>