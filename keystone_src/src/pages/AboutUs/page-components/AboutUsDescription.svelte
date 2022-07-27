<script>
    export let image_url = "";
</script>

<article id="home-about-us-descripton-content">
    <div id="haudc-top-content">
        <div id="haudc-tc-aboutus-banner">
            <img src={`${image_url}`} class="round-image" alt="">
        </div>
        <div id="haudc-tc-aboutus-desc">
            <h2 id="haudc-tc-ad-title" class="keystone-header-1">
                About Us
            </h2>
            <div id="hau-dw-loader-line" class="loadbar-left-right"></div>
            <div id="haudc-dc-aboutus-text">
                <p>
                    Keystone was born from an innocent and deep passion for building and creating. Along the way, we have gathered tons of support for like-minded people and what started as a small team of two, on June 14th 2020, has rapidly grown to have over 60 members across several countries in lot of different departments. We are currently working on projects for NFT Worlds, Sandbox and Marketplace, besides Minecraft building which is our main focus.
                </p>
            </div>
        </div>
    </div>
    <div id="haudc-midsection-desc" class="haudc-centered-text">
        While we hope to flourish even more in the future, we will always keep in mind our core values: quality, fair prices, teamwork, sense of community complete client satisfaction, transparency, credibility and honesty. We and our whole team promise to always follow these principles, under any circumstances.
    </div>
    <div id="huadc-bottom-citation" class="haudc-centered-text">
        <cite>"Behind every good network there is a great team of builders. Let us be yours"</cite>
    </div>
</article>

<style>
    #home-about-us-descripton-content {
        --haudc-regular-font-size: var(--font-size-2);
        --hau-title-font-size: var(--font-size-h2);

        font-size: var(--haudc-regular-font-size);
        margin-top: 8vh;
    }

    #haudc-top-content {

        display: flex;
    }


    #haudc-tc-ad-title {
        font-size: var(--hau-title-font-size);
    }
    
    .haudc-centered-text {
        text-align: center;
    }
    
    #hau-dw-loader-line {
        width: calc(calc(var(--hau-title-font-size) * 0.68) * 7); 
        /* 7 is the number of letters in the title */
        height: 1ex;
        background-color: var(--theme-color);
        margin-bottom: 3vh;
    }
    
    #haudc-tc-aboutus-banner {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10vh 0;
    }

    #haudc-tc-aboutus-banner img {
        width: 70%;
    }

    #haudc-tc-aboutus-desc {
        width: 50%;
        padding: 15vh 0;
    }

    #haudc-dc-aboutus-text {
        width: 90%;
        font-size: var(--haudc-regular-font-size);
    }

    #haudc-midsection-desc {
        width: 90%;
        margin: 0 auto;
    }

    #huadc-bottom-citation {
        font-size: var(--font-size-2);
        margin-top: 5vh;
    }

    @media only screen and (max-width: 668px) {
        #home-about-us-descripton-content {
            --haudc-regular-font-size: var(--font-size-2);
            --hau-title-font-size: var(--font-size-h2);

            margin-top: 1vh;
        }   
        
        #haudc-top-content {
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        #haudc-tc-aboutus-banner {
            width: 100%;
            padding: 5vh 0 1vh 0;
        }

        #haudc-tc-aboutus-desc {
            display: flex;
            width: 74%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 5vh 0;
        }

        #haudc-midsection-desc {
            width: 74%;
        }

        #huadc-bottom-citation {
            width: 74%;
            margin: 5vh auto;
        }
    }
    
</style>