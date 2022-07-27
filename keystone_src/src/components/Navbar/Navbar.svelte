<script>
    import { link, location } from "svelte-spa-router";
    import { isMobile } from '../../utils'; 

    let showing_modal = false


    const nav_options = {
        portfolio: "/portfolio",
        build_store: "/build-store",
        contact_us: "/contact-us"
    }

    const propagateToAchor = (e) => {
        // e.preventDefault()
        if (Event.AT_TARGET !== e.eventPhase) {
            return;
        }

        showing_modal = false;

        e.stopPropagation()
        const { target:li_with_achor } = e;
        const a = li_with_achor.querySelector("a")
        a?.click()
        console.log(a);
    }   

</script>



<navbar id="keystone-main-navbar">
    <div id="kmn-home-achor">
        <a href="/" use:link>
            <img src="/resources/images/logos/Logo-S.webp" alt="keystone logo">
        </a>
    </div>
    <div id="kmn-left-content">
        <ul id="kmn-navotions"> 
            {#if !isMobile()}
                {#each Object.keys(nav_options) as option}
                    <li on:click={propagateToAchor} class="kmn-navoption-wrapper kmn-option-wrapper {$location === nav_options[option] ? 'nav-active' : ''}">
                        <a href={`${nav_options[option]}`} class="kmn-navoption" use:link>{option.replace("_", " ")}</a>
                    </li>
                {/each}
            {/if}
        </ul>
        <div id="kmn-pisemenu-btn-wrapper">
            <button on:click={() => showing_modal = !showing_modal} id="kmn-pie-menu-btn">
                {#if showing_modal}
                    <span class="material-symbols-outlined kmn-close-btn">
                        close
                    </span>
                {:else}
                    <span class="material-symbols-outlined">
                        menu
                    </span>
                {/if}
            </button>
        </div>
    </div>
    {#if showing_modal}
        <div id="kmn-extra-navs-modal">
            {#if isMobile()}
                {#each Object.keys(nav_options) as option}
                    <li on:click={propagateToAchor} class="kmn-nav-extra-option-wrapper kmn-option-wrapper">
                        <a on:click={() => showing_modal = false} href={`${nav_options[option]}`} class="kmn-navoption" use:link>{option.replace("_", " ")}</a>
                    </li>
                {/each}
            {/if}
            <li on:click={propagateToAchor} class="kmn-nav-extra-option-wrapper kmn-option-wrapper">
                <a on:click={() => showing_modal = false} href="/marketplace" class="kmn-navoption" use:link>Marketplace</a>
            </li>
            <li on:click={propagateToAchor} class="kmn-nav-extra-option-wrapper kmn-option-wrapper">
                <a on:click={() => showing_modal = false} href="/our-clients" class="kmn-navoption" use:link>Notable Clients</a>
            </li>
            <li on:click={propagateToAchor} class="kmn-nav-extra-option-wrapper kmn-option-wrapper">
                <a on:click={() => showing_modal = false} href="/our-services" class="kmn-navoption" use:link>Our Services</a>
            </li>
            <li on:click={propagateToAchor} class="kmn-nav-extra-option-wrapper kmn-option-wrapper">
                <a on:click={() => showing_modal = false} href="/about-us" class="kmn-navoption" use:link>About Us</a>
            </li>

        </div>
    {/if}
</navbar>

<style>
    @keyframes popIconIn {
        0% {
            transform: translateY(10vh);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }

    #keystone-main-navbar {
        display: flex;
        position: fixed;
        width: 100%;
        height: var(--navbar-height);
        background-color: var(--dark-color);
        color: var(--clear-color);
        top: 0;
        left: 0;
        padding: 0 1vw;
        justify-content: space-between;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        z-index: 10;
    }
    
    #kmn-home-achor {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .nav-active {
        color: var(--theme-color);
    }

    #kmn-home-achor img {
        width: 3vw;
        
    }
    
    #kmn-left-content {
        display: flex;
    }

    ul#kmn-navotions {
        display: flex;
        width: max-content;
        align-items: center;
        justify-self: flex-end;
        margin-right: 3vw;
    }

    .kmn-navoption-wrapper  {
        display: flex;
        width: max-content;
        min-width: 8vw;
        height: var(--navbar-height);
        justify-content: center;
        margin-left: 1vw;
        align-items: center;
        border-radius: 5px;
        text-transform: capitalize;
        transition: all 0.7s ease-in
    }


    #kmn-pisemenu-btn-wrapper {
        display: flex;
        align-items: center;
        color: var(--lighter-dark-color);
        font-size: .8vw !important;
    }

    #kmn-pisemenu-btn-wrapper span  {
        animation-name: popIconIn;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
        animation-delay: 0;
        font-size: 3em !important;
    }

   

    #kmn-extra-navs-modal {
        --kmn-extra-navs-modal-width: 20%;
        
        display: flex;
        position: fixed;
        width: var(--kmn-extra-navs-modal-width);
        min-height: 15vh;
        height: max-content;
        background-color:  var(--dark-color);
        flex-direction: column;
        border-radius: 5px;
        justify-content: space-between;
        align-items: center;
        padding: 1em 0;
        top: calc(var(--navbar-height) + 1vh);
        left: calc(100% - var(--kmn-extra-navs-modal-width) - .5%);
        box-shadow: 0px 2px 9px 3px rgba(0, 0, 0, 0.3);
        z-index: 3;
    }

    .kmn-nav-extra-option-wrapper{
        display: flex;
        width: 90%;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid var(--lighter-dark-color);
        padding: .5em 0;
    }

    .kmn-nav-extra-option-wrapper:last-child {
        border-bottom: none;
    }
    
    .kmn-option-wrapper {
        cursor: pointer;
        transition: all .4s ease-in-out;
    }

    @media (pointer: fine) {
        .kmn-navoption-wrapper:hover {
            box-shadow: inset 0px -2px 10px 4px rgba(0, 0, 0, 0.2);
        }
        
        .kmn-navoption-wrapper:hover a {
            font-weight: bold;
        }

        #kmn-pisemenu-btn-wrapper span:hover {
            color: var(--theme-color);
            transition: all 0.5s ease-in-out;
        }

        #kmn-pisemenu-btn-wrapper span.kmn-close-btn:hover {
            color: var(--danger);
        }
        
        .kmn-option-wrapper:hover {
            background-color: var(--theme-color);
            color: var(--dark-color);
        }
    }

    @media only screen and (max-width: 668px) {
        #kmn-home-achor img {
            width: 10vw;
        }

        #kmn-pisemenu-btn-wrapper span {
            font-size: 8vw !important;
        }
        
        #kmn-extra-navs-modal {
            --kmn-extra-navs-modal-width: 50%;
        }
        
        #kmn-extra-navs-modal a {
            text-transform: capitalize;
        }

        
    }
</style>