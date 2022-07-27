<script>
    import { onMount } from 'svelte';
    import Carousel from 'svelte-carousel';

    let reviews = [];
    let currentCarouselIndex = 0;

    onMount(() => {
        fetch('/resources/data/reviews.json')
            .then(promise => promise.json())
            .then(data => {
                reviews = data;
            });
    });

    const handleCarouselIndexChange = index => {
        currentCarouselIndex = index;
    };
    
</script>

<article id="home-reviews-content" class="round-box">
    <div id="hrc-title">
        <h2 class="keystone-header-1">Client Reviews</h2>
    </div>
    <div id="hrc-reviews-cards-container">
        <div id="hrc-rcc-main-card" class="hrc-rcc-card round-box hrc-rcc-c-1">
            {#if reviews?.length > 0}
            <Carousel 
                    autoplay
                    autoplayDuration={3000}
                    particlesToShow={1} 
                    arrows={true}
                    dots={false}
                    on:pageChange={(e) => handleCarouselIndexChange(e.detail)}
                >
                    {#each reviews as review}
                        <div class={`hrc-rcc-review-container ${review.review.length <= 200 ? "centered-review" : ""}`}>
                            <p class="hrc-rcc-review-text">"{review.review}"</p>
                            <cite class="hrc-rcc-reviewer-name">{review.reviewer}</cite>
                        </div>
                    {/each}
                </Carousel>
            {/if}
        </div>
        <div class="hrc-rcc-card round-box hrc-rcc-c-2"></div>
        <div class="hrc-rcc-card round-box hrc-rcc-c-3"></div>
    </div>
    <div id="hrc-reviews-bubbles">
        {#each reviews.slice(0,6) as review, index}
             <div class={`hrc-review-bubble hrc-bubble-${index} ${index === currentCarouselIndex ? 'hrc-rb-active jello-horizontal' : ''}`}>
                 <img src={review.reviewer_image} alt="" srcset="">
             </div>
        {/each}
    </div>
</article>

<style>
    #home-reviews-content {
        position: relative;
        display: flex;
        background: url('/resources/images/top_page_banners/1home-original.webp');
        background-size: cover;
        width: 86vw;
        height: 100vh;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        border-radius: 25px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }

    #hrc-title {
        margin-top: 10vh;
        text-align: center;
        color: white;
        text-shadow: 0 0 18px rgba(0, 0, 0, 0.9);
    }

    #hrc-reviews-cards-container {
        --main-card-width: 50%;
        --hrc-rcc-card-height: 50vh;
    }

    
    .hrc-rcc-card {
        position: absolute;
        background-color: white;
        height: var(--hrc-rcc-card-height);
    }
    
    .hrc-rcc-review-container {
        display: flex;
        height: var(--hrc-rcc-card-height);
        flex-direction: column;
        overflow-y: auto;
        justify-content: flex-start;
        align-items: center;
        margin: 0 auto;
        user-select: none;
        padding: 4vh 0;
    }

    .hrc-rcc-review-container.centered-review {
        justify-content: center;
    }

    .hrc-rcc-review-container::-webkit-scrollbar {
        display: none;
    }

    .hrc-rcc-review-text {
        width: 80%;
        text-align: center;
        font-size: 1.6vw;
    }

    :global(.centered-review) {
        text-align: center;
    }

    .hrc-rcc-reviewer-name {
        font-size: --font-size-1;
        text-align: center;
        margin-top: 4vh;
    }
    
    .hrc-rcc-c-1 {
        width: var(--main-card-width);
        z-index: 3;
        top: 20%;
        left: calc(50% - var(--main-card-width) / 2);
        padding: 0 1vw;
    }

    .hrc-rcc-c-2 {
        width: calc(var(--main-card-width) * 0.8);
        z-index: 2;
        top: 23%;
        left: calc(50% - calc(var(--main-card-width) * 0.8) / 2);
    }

    .hrc-rcc-c-3 {
        width: calc(var(--main-card-width) * 0.6);
        z-index: 1;
        top: 25%;
        left: calc(50% - calc(var(--main-card-width) * 0.6) / 2);
    }

    
    /*=============================================
    =            Review bubbles            =
    =============================================*/
    .hrc-review-bubble {
        position: absolute;
        display: flex;
        width: 8vw;
        height: 8vw;
        border-radius: 50%;
        background-color: white;

        z-index: 4;
        justify-content: center;
        align-items: center;
        border: 4px solid white;
        box-shadow: -5px 17px 36px 3px rgb(0 0 0 / 40%);
        transition: all 0.2s ease-in-out;
        filter: grayscale(90%);
    }
    
    .hrc-review-bubble img {
        width: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
    
    :global(.hrc-bubble-0) {
        top: 8%;
        left: 9%;
    } 
    
    :global(.hrc-bubble-1) {
        top: 10%;
        left: 80%;
    } 

    :global(.hrc-bubble-2) {
        top: 40%;
        left: 6%;
    } 
    
    :global(.hrc-bubble-3) {
        top: 45%;
        left: 88%;
    } 
    
    :global(.hrc-bubble-4) {
        top: 70%;
        left: 9%;
    } 
    
    :global(.hrc-bubble-5) {
        top: 75%;
        left: 80%;
    } 
    
    :global(div#hrc-reviews-bubbles .hrc-review-bubble.hrc-rb-active) {
        filter: grayscale(0%);
        border-color: var(--theme-color);
        box-shadow: -5px 17px 16px 1px rgba(255, 196, 0, 0.152);
        transform: scale(1.1);
        animation-duration: .8s;
    }
    
    
    @media only screen and (max-width: 668px) {
        #home-reviews-content {
            width: 97vw;
            height: 55vh;
            background-position: center;
        }

        #hrc-title {
            margin-top: 4vh;
        }

        #hrc-reviews-cards-container {
            --main-card-width: 54%;
            --hrc-rcc-card-height: 30vh;
        }

        .hrc-rcc-review-text {
            width: 77%;
            font-size: var(--font-size-2);
        }

        .hrc-review-bubble {
            width: 16vw;
            height: 16vw;
            border: 2px solid white;
        }

        :global(.hrc-bubble-0) {
            top: 10.2%;
            left: 4%;
        } 

        :global(.hrc-bubble-2) {
            top: 40%;
            left: 2%;
        } 

        :global(.hrc-bubble-3) {
            top: 45%;
            left: 82%;
        }
        
        :global(.hrc-bubble-4) {
            top: 79%;
            left: 9%;
        } 

        :global(.hrc-bubble-5) {
            top: 79%;
            left: 74%;
        } 
    }

</style>