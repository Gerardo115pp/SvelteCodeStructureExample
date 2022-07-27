<script>
    import viewport from "../../../components/LazyLoader/actions/useViewPortAction";

    export let members = [];
    export let team_name = "generic team";
    export let extra_class = "";
    export let id;

    const returnRandomDelay = () => {
        return Math.random();
    }

    const setBounceAnimation = (e) => {
        if (e.eventPhase !== Event.AT_TARGET) {
            return;
        }

        const { target:element } = e;
        element.classList.add("bounce-in-top");
        element.style.animationDelay = returnRandomDelay() + "s";
    }

</script>

<section {id} class={`keystone-team-list ${extra_class}`}>
    <div class="ktl-team-name-wrapper">
        <h3>{team_name}</h3>
    </div>
    <div class="ktl-team-members-container">
        {#each members as member}
            <div class="ktl-member-wrapper">
                <div  use:viewport on:viewportEnter={setBounceAnimation} class="ktl-mw-image-wrapper">
                    <img src={member.image} alt="">
                </div>
                <div class="ktl-mw-name-wrapper">
                    <h4>
                        {member.name}
                    </h4>
                </div>
            </div>
        {/each}
    </div>
</section>

<style>
    .keystone-team-list {
        padding: 4vh 0;
    }    

    .ktl-team-name-wrapper {
        margin: 0 auto;
        color: white;
        text-align: center;
        font-size: var(--font-size-h2);
    }

    .ktl-team-members-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-top: 5vh;
    }
    
    .ktl-member-wrapper {
        width: 15%;
        margin: 1vh 4vw;
        transition: all 0.3s ease-in-out;
    }

    .ktl-member-wrapper:hover {
        transform: scale(1.1);
    }
    
    .ktl-mw-image-wrapper {
        display: flex;
        width: 100%;
        overflow: hidden;
        border-radius: 50%;
        background: white;
        justify-content: center;
        align-items: center;
        box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.5);
    }

    .ktl-mw-image-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .ktl-mw-name-wrapper {
        width: 100%;
        color: white;
        text-align: center;
        margin-top: 2vh;
        font-size: var(--font-size-h3);
    }

    @media only screen and (max-width: 668px) {
        .ktl-member-wrapper {
            width: 30%;
        }

        .ktl-mw-name-wrapper {
            font-size: var(--font-size-4);
        }
    }
</style>