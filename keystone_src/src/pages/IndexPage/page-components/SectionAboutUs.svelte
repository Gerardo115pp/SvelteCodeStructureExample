<script>
    import { onMount } from "svelte";
    import viewport from '../../../components/LazyLoader/actions/useViewPortAction';
    import { link } from "svelte-spa-router";

    let about_us_stats = [];
    const length_of_count_animation = 5000; // milliseconds
    const time_between_animation_updates = 80; // milliseconds
    const counting_steps = length_of_count_animation / time_between_animation_updates;
    let animation_manager = undefined;

    let counter_color_classes = [
        'hauc-counter-low',
        'hauc-counter-mid',
        'hauc-counter-high'
    ]

    onMount(() => {
        fetch("/resources/data/home_stats.json")
            .then(response => response.json())
            .then(data => {
                about_us_stats = data;
            });
    });

    const getColorClass = (ready_value, current_value) => {
        let color_class = '';

        if (current_value < ready_value*0.3) {
            color_class = counter_color_classes[0];
        } else if (current_value < ready_value * 0.6) {
            color_class = counter_color_classes[1];
        } else {
            color_class = counter_color_classes[2];
        }

        return color_class;
    } 

    const handleViewportEnter = e => {
        window.queueMicrotask(() => {
            window.setTimeout(setAnimationManager, 400);
        });
        e.target?.classList.add('fade-in-bottom');
    }
    
    const setAnimationManager = (clear) => {
        if (animation_manager === undefined) {
            animation_manager = setInterval(updateCounter, time_between_animation_updates);
            console.log('setAnimationManager');
        } else if (clear === true) {
            clearInterval(animation_manager);
            animation_manager = undefined;
        }
    };

    const isInt = num => num % 1 === 0;

    const updateCounter = () => {
        /* 
            in about_us_stats we have list, each element has {name_of_stat, value_of_stat, and element_ref called element}
            each time this function is called, it will read the current value of element.innerText and increment by 
            value_of_stat/counting_steps.
         */
        about_us_stats.forEach(stat => {
            let current_value = parseFloat(stat.element.innerText.replace(',', ''));
            stat.ready = true;
            if (current_value < stat.value) {
                stat.ready = false;
                let new_value = current_value + stat.value / counting_steps;
                new_value = new_value >= stat.value ? stat.value : new_value.toFixed(2);
                new_value = isInt(new_value) ? parseInt(new_value) : new_value;
                stat.element.classList.add(getColorClass(stat.value, new_value));
                stat.element.innerText = `${new_value.toLocaleString('en-US')}`;
            } 
        });

        if (about_us_stats.every(stat => stat.ready)) {
            setAnimationManager(true); // if already set, it will clear the interval
        }
    }
</script>

<article id="home-about-us-content">
    <div use:viewport on:viewportEnter={e => e.target?.classList.add('fade-in-bottom')} id="hau-content-wrapper">
        <div id="hau-image" class="hau-section">
            <img src="/resources/images/section_pages/aboutUs-Home-original.webp" alt="about us project"/>
        </div>
        <div id="hau-data">
            <div id="hau-data-wrapper">
                <div id="hau-data-title">
                    <h2 class="keystone-header-1">About us</h2>
                    <div id="hau-dw-loader-line" class="loadbar-left-right"></div>
                </div>
                <p id="hau-data-description">
                    Keystone was born from the deep passion for building and creating. We gathered tons of support and our team has grown across several countries in different departments. We offer services for NFT Worlds, Sandbox and Marketplace, besides Minecraft building.
                </p>
                <div id="hau-data-controls">
                    <a href="/about-us" use:link>
                        <button class="full-btn">
                            Read More
                        </button>
                    </a>
                    <a href="/our-services" use:link>
                        <button class="clear-btn">
                            Our Services
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div id="hau-stats-panel">
        <div use:viewport on:viewportEnter={handleViewportEnter} id="hau-sp-wrapper">
            {#each about_us_stats as au_stat}
                <div  class="hau-sp-stat">
                    <h3 bind:this={au_stat.element} class="hau-stat-title">{(au_stat.value*0.2).toFixed(2)}</h3>
                    <p class="hau-stat-description">{au_stat.name}</p>
                </div>
            {/each}
        </div>
    </div>
</article>

<style>
    #home-about-us-content {
        box-sizing: border-box;
        /* margin-top: 3vh; */
        padding: 3vh 0;
    }
    
    #hau-content-wrapper{
        width: 84vw;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
    }
    
    #hau-image img{
        width: 37.44vw;
    }
    
    #hau-data {
        display: flex;
        width: 50vw;
        align-items: center;
    }

    #hau-data-wrapper {
        width: 90%;
        margin: 0 0 0 auto;
    }

    #hau-data-title {
        --hau-title-font-size: var(--font-size-h2);

        width: max-content;
        margin-bottom: 1vh;
    }

    #hau-data-title h2 {
        font-size: var(--hau-title-font-size);
    }

    #hau-dw-loader-line {
        width: calc(calc(var(--hau-title-font-size) * 0.68) * 7); 
        /* 7 is the number of letters in the title */
        height: 1ex;
        background-color: var(--theme-color);
        margin-bottom: 1vh;
    }

    #hau-data-description {
        font-size: 1.1vw;
        width: 100%;
        margin-bottom: 3vh;
        text-align: justify;
        text-justify: inter-word;
    }

    /* #hau-data-controls  */

    #hau-data-controls .full-btn {
        margin: 0 3em 0 0;
    }

    #hau-stats-panel {
        width: 100%;
        background: var(--purple-gradient-color);
        color: white;
        padding: 6.8vh 0;
        margin: 7vh auto 0;
    }
    
    #hau-sp-wrapper {
        display: flex;
        width: 70%;
        margin: 0 auto;
        justify-content: space-around;
        animation-duration: .8s;
        animation-delay: .2s;
    }

    .hau-sp-stat {
        /* width: 30%; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .hau-sp-stat h3{
        text-align: center;
        font-size: 3vw;
        font-weight: 500;
        transition: all 0.3s ease-in-out;
        color: #128bfc;
    }

    .hau-sp-stat h3::after {
        content: "+";
    }

    .hau-sp-stat p {
        text-align: center;
    }

    :global(.hauc-counter-low) {
        color: rgb(113, 52, 3) !important;
    }

    :global(.hauc-counter-mid) {
        color: rgb(252, 137, 14) !important;
    }
    
    :global(.hauc-counter-high) {
        color: #F6CD61 !important;
    }

    @media only screen and (max-width: 768px) {
        #home-about-us-content {
            padding: 1vh 0;
        }

        #hau-content-wrapper {
            flex-direction: column;
            align-items: center;
        }

        #hau-image {
            width: 100%;
        }

        #hau-image img {
            width: 100%;
        }

        #hau-data {
            width: 70vw;
            margin: 0 auto;
        }


        #hau-data-wrapper {
            width: 100%;
            margin: 0;
        }

        #hau-data-title {
            margin-top: 2vh;
            --hau-title-font-size: var(--font-size-h2);
        }

        #hau-data-description {
            margin-top: 2vh;
            font-size: var(--font-size-2);
        }

        #hau-data-controls {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 auto;
        }

        #hau-data-controls button {
            margin: 0 0vw;
            padding: 1vh 5vw;
        }

        #hau-data-controls button {
            margin: 1vh 0 0 0;
            padding: 0.8vh 1.4vw;
        }

        #hau-sp-wrapper {
            width: 93%;
            justify-content: space-between;
        }

        .hau-sp-stat h3 {
            font-size: 5vw !important;
        }

        .hau-sp-stat p {
            font-size: var(--font-size-1) !important;
            margin:  0.3vh 0 0 0;
        }
    }

</style>