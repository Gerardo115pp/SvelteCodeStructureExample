<script>
    import Navbar from "./components/Navbar/Navbar.svelte";
    import Router from "svelte-spa-router";
    import Footer from "./components/Footer/Footer.svelte";
    import { routes } from "./routes";
</script>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700");

    :global(:root) {
        --dark-color: #212529;
        --lighter-dark-color: #616161;
        --clear-color: #fafafa;
        --theme-color: #ffc507;
        --golden-color: #F6CD61;
        --purple-color: #2f1160;
        --purple-gradient-color: linear-gradient(115deg, #452675 0%, #7144BB 100%);
        --clear-purple-color: #5865F2;
        --danger: rgb(203, 92, 28);
        --theme-gradient: linear-gradient(115deg, var(--theme-color) 0%, var(--danger) 100%);
        --trasparent-theme-color: #ffc50799;
        --navbar-height: 8vh;
        --footer-height: 23.7793vh;
        --hero-height: calc(100vh - var(--navbar-height));
        --boxes-roundness: 12px;

        /* --Fonts-- */

        --font-size-1: .8vw;
        --font-size-2: calc(var(--font-size-1) + calc(var(--font-size-1) * 0.25));
        --font-size-3: calc(var(--font-size-1) + calc(var(--font-size-1) * 0.33));
        --font-size-small: calc(var(--font-size-1) * 0.8);

        --font-size-h1: calc(var(--font-size-1) * 4.5);
        --font-size-h2: calc(var(--font-size-1) * 3.25);
        --font-size-h3: calc(var(--font-size-1) * 2.125);
        --font-size-h4: calc(var(--font-size-1) * 1.8);
        
        --btn-font-size: var(--font-size-3);
    }

    @media only screen and (max-width: 668px) {
        :global(:root) {
            --font-size-1: 2.2vw;
            --font-size-2: calc(var(--font-size-1) + calc(var(--font-size-1) * 0.25));
            --font-size-3: calc(var(--font-size-1) + calc(var(--font-size-1) * 0.33));

            --font-size-h1: calc(var(--font-size-1) * 4.5);
            --font-size-h2: calc(var(--font-size-1) * 3.5);
            --font-size-h3: calc(var(--font-size-1) * 2.5);
            --font-size-h4: calc(var(--font-size-1) * 2);
            --font-size-h5: calc(var(--font-size-1) * 1.75);

            --btn-font-size: var(--font-size-h3);
        }
    }

    :global(body) {
        margin: 0;
        padding: 0;
        font-family: "Poppins", sans-serif;
        font-size: 16px;
        color: #333;
        background-color: var(--clear-color);
    }

    :global(::-webkit-scrollbar) {
        position: fixed;
        width: 6px;
    }

    :global(::-webkit-scrollbar-thumb) {
        background: var(--theme-color);
        border-radius: 9999px;
    }

    :global(::-webkit-scrollbar-track) {
        background: var(--dark-color);
    }

    #content-wrap {
        margin-top: var(--navbar-height);
    }

    /* Normalize */
    :global(*) {
        box-sizing: border-box;
    }

    :global(li) {
        list-style: none;
    }

    :global(a) {
        text-decoration: none;
        color: inherit;
    }

    :global(button) {
        border: none;
        background-color: transparent;
        cursor: pointer;
        color: inherit;
    }

    :global(h1, h2, h3, h4, h5, h6) {
        margin: 0;
        padding: 0;
    }

    :global(p) {
        margin: 0;
        padding: 0;
    }

    :global(.full-btn) {
        cursor: pointer;
        box-sizing: border-box;
        padding: 0.5em 2em;
        color: var(--dark-color);
        background-color: var(--theme-color);
        border-radius: 8px;
        font-weight: bold;
        font-size: var(--btn-font-size);
        box-shadow: 0px 5px 4px 1px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease-in-out;
        text-transform: uppercase;
        text-transform: uppercase;
    }



    
    :global(.full-btn:hover) {
        background-color: #2f1160;
        color: var(--clear-color);
        transform: scale(1.1);
        box-shadow: 0px 5px 8px 3px rgba(0, 0, 0, 0.18);
    }

    :global(.clear-btn) {
        cursor: pointer;
        box-sizing: border-box;
        background-color: rgba(255, 255, 255, 0.658);
        color: var(--dark-color);
        border: 1px solid var(--dark-color);
        padding: 0.5em 2em;
        border-radius: 8px;
        font-weight: bold;
        font-size: var(--btn-font-size);
        box-shadow: 0px 5px 4px 1px rgba(0, 0, 0, 0.1);
        transition: all 0.2s ease-in;
        text-transform: uppercase;
    }
    
    :global(.clear-btn:hover) {
        background-color: var(--theme-color);
        color: var(--dark-color);
        transform: scale(1.1);
        /* border: none; */
    }
    
    :global(.round-image) {
        border-radius: var(--boxes-roundness);
        box-shadow: 0px 5px 17px 4px rgb(0 0 0 / 26%);
    }

    :global(.round-box) {
        border-radius: var(--boxes-roundness);
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    }

    :global(.keystone-header-1) {
        font-size: var(--font-size-h1);
        font-weight: 700;
        text-transform: capitalize;
    }

    :global(.theme-color-text) {
        color: var(--theme-color);
    }

    @media only screen and (max-width: 668px) {
        :global(.full-btn) {
            padding: 0.5em 1em;
            font-size: var(--btn-font-size) !important;
        }
        
        :global(.clear-btn) {
            font-size: var(--btn-font-size) !important;
            padding: 2vw 4vw;
        }

        :global(.keystone-header-1) {
            font-size: var(--font-size-h2);
        }
    }
    /*=============================================
    =            Animations            =
    =============================================*/

    @keyframes slide-in-left {
        0% {
            -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
        }
    }

    :global(.slide-in-left) {
        -webkit-animation: slide-in-left 0.5s
            cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }

    @keyframes roll-in-right {
        0% {
            -webkit-transform: translateX(800px) rotate(540deg);
            transform: translateX(800px) rotate(540deg);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateX(0) rotate(0deg);
            transform: translateX(0) rotate(0deg);
            opacity: 1;
        }
    }

    :global(.roll-in-blurred-right) {
        -webkit-animation: roll-in-right 0.65s cubic-bezier(0.23, 1, 0.32, 1)
            both;
        animation: roll-in-right 0.65s cubic-bezier(0.23, 1, 0.32, 1) both;
    }

    @keyframes tracking-in-contract-bck-top {
        0% {
            letter-spacing: 1em;
            -webkit-transform: translateZ(400px) translateY(-300px);
            transform: translateZ(400px) translateY(-300px);
            opacity: 0.1;
        }
        20% {
            opacity: 0.6;
        }
        100% {
            -webkit-transform: translateZ(0) translateY(0);
            transform: translateZ(0) translateY(0);
            opacity: 1;
        }
    }

    :global(.tracking-in-contract-bck-top) {
        -webkit-animation: tracking-in-contract-bck-top 1s
            cubic-bezier(0.215, 0.61, 0.355, 1) both;
        animation: tracking-in-contract-bck-top 1.5s both;
    }

    @keyframes text-focus-in {
        0% {
            -webkit-filter: blur(12px);
            filter: blur(12px);
            opacity: 0;
        }
        100% {
            -webkit-filter: blur(0px);
            filter: blur(0px);
            opacity: 1;
        }
    }

    :global(.text-focus-in) {
        -webkit-animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
        animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
    }

    @keyframes focus-in-expand {
        0% {
            letter-spacing: -0.5em;
            -webkit-filter: blur(12px);
                    filter: blur(12px);
            opacity: 0;
        }
        100% {
            -webkit-filter: blur(0px);
                    filter: blur(0px);
            opacity: 1;
        }
    }   


    :global(.focus-in-expand) {
        -webkit-animation: focus-in-expand 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        animation: focus-in-expand 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }

    @keyframes loadbar-left-right {
        0% {
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
        }
        100% {
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
        }
    }

    :global(.loadbar-left-right) {
        -webkit-animation: loadbar-left-right 1s ease-in-out both;
        animation: loadbar-left-right 1s ease-in-out both;
        transform-origin: left;
    }

    @keyframes jello-horizontal {
        0% {
            -webkit-transform: scale3d(1, 1, 1);
                    transform: scale3d(1, 1, 1);
        }
        30% {
            -webkit-transform: scale3d(1.25, 0.75, 1);
                    transform: scale3d(1.25, 0.75, 1);
        }
        40% {
            -webkit-transform: scale3d(0.75, 1.25, 1);
                    transform: scale3d(0.75, 1.25, 1);
        }
        50% {
            -webkit-transform: scale3d(1.15, 0.85, 1);
                    transform: scale3d(1.15, 0.85, 1);
        }
        65% {
            -webkit-transform: scale3d(0.95, 1.05, 1);
                    transform: scale3d(0.95, 1.05, 1);
        }
        75% {
            -webkit-transform: scale3d(1.05, 0.95, 1);
                    transform: scale3d(1.05, 0.95, 1);
        }
        100% {
            -webkit-transform: scale3d(1, 1, 1);
                    transform: scale3d(1, 1, 1);
        }
    }


    :global(.jello-horizontal) {
	-webkit-animation: jello-horizontal 0.9s both;
	        animation: jello-horizontal 0.9s both;
    }

    @keyframes fade-in-bottom {
        0% {
            -webkit-transform: translateY(50px);
                    transform: translateY(50px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateY(0);
                    transform: translateY(0);
            opacity: 1;
        }
    }

    :global(.fade-in-bottom) {
        -webkit-animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }

    @keyframes bounce-in-top {
        0% {
            -webkit-transform: translateY(-500px);
                    transform: translateY(-500px);
            -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
            opacity: 0;
        }
        38% {
            -webkit-transform: translateY(0);
                    transform: translateY(0);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
            opacity: 1;
        }
        55% {
            -webkit-transform: translateY(-65px);
                    transform: translateY(-65px);
            -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
        }
        72% {
            -webkit-transform: translateY(0);
                    transform: translateY(0);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
        81% {
            -webkit-transform: translateY(-28px);
                    transform: translateY(-28px);
            -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
        }
        90% {
            -webkit-transform: translateY(0);
                    transform: translateY(0);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
        95% {
            -webkit-transform: translateY(-8px);
                    transform: translateY(-8px);
            -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
        }
        100% {
            -webkit-transform: translateY(0);
                    transform: translateY(0);
            -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
        }
    }

    :global(.bounce-in-top) {
            -webkit-animation: bounce-in-top 1.1s both;
	        animation: bounce-in-top 1.1s both;
    }

    @keyframes slide-in-vertical {
        0% {
            -webkit-transform: translateX(-800px) rotateY(30deg) scale(0);
                    transform: translateX(-800px) rotateY(30deg) scale(0);
            -webkit-transform-origin: -100% 50%;
                    transform-origin: -100% 50%;
            opacity: 0;
        }
        100% {
            -webkit-transform: translateX(0) rotateY(0) scale(1);
                    transform: translateX(0) rotateY(0) scale(1);
            -webkit-transform-origin: 1800px 50%;
                    transform-origin: 1800px 50%;
            opacity: 1;
        }
    }


    :global(.slide-in-vertical) {
            -webkit-animation: slide-in-vertical 0.45s ease-out both;
	        animation: slide-in-vertical 0.45s ease-out both;
    }
</style>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
    />
</svelte:head>
<div id="page-content">
    <Navbar />
    <div id="content-wrap">
        <Router {routes} />
    </div>
    <Footer />
</div>
