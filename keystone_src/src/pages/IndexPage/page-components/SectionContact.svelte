<article id="home-contact-us-content">
    <div id="hcuc-recruitment-banner">
        <div id="hcuc-rb-hero-image">
            <img src="/resources/images/section_pages/contact-home-original.webp" alt="">
        </div>
        <div id="hcuc-rb-hero">
            <h2>Order or<br/> Apply</h2>
        </div>
        <a href="https://discord.com/invite/MeWezdG" target="_blank" rel="noopener">
            <div id="hcuc-rb-calltoaction">
                <button id="hcuc-rb-calltoaction-contact-btn">
                    Contact us now
                </button>
            </div>
        </a>
    </div>
</article>

<style>
    #home-contact-us-content {
        display: flex;
        overflow: hidden;
        justify-content: center;
        min-height: 35vw;
    }

    #hcuc-recruitment-banner {
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;    
    }

    #hcuc-rb-hero-image {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }

    #hcuc-rb-hero-image img {
        width: 100%;
    }

    #hcuc-rb-hero {
        position: absolute;
        top: 24%; 
        left: 6%;
        font-size: 2vw;
        z-index: 2;
    }

    #hcuc-rb-calltoaction {
        position: absolute;
        background-color: var(--clear-purple-color);
        top: 54%;
        left: 6%;
        z-index: 2;
        border-radius: var(--boxes-roundness);
        padding: 1.8vh 2vw;
        font-size: 1.1vw;
        box-shadow: -2px 5px 4px 1px rgba(0, 0, 0, 0.1);
    }
    
    #hcuc-rb-calltoaction-contact-btn {
        font-weight: bold;
    }
    
    @media (pointer: fine) {
        #hcuc-rb-calltoaction {
            transition: all 0.3s ease-in-out;
        }

        #hcuc-rb-calltoaction:hover {
            transform: scale(1.1);
        }
    }

    @media only screen and (max-width: 668px) {
        #home-contact-us-content {
            height: 17vh;
        }

        #hcuc-recruitment-banner {
            width: 100%;
        }

        #hcuc-rb-calltoaction {
            top: 30%;
            left: 65%;
            padding: 0.8vh 3vw;
            font-size: 2.2vw;
        }
    }

</style>