<script>
    export let image_src = "";
    export let is_open = true;
    $: toggleIsOpen(), image_src; // toggle is_open when image_src is changed

    function toggleIsOpen() {
        is_open = !is_open;
    }
</script>

{#if is_open}
     <!-- content here -->
     <section id="ppc-portfolio-fullimage-modal">
         <div id="ppc-pfm-container">
             <img src="{`/resources/images/Keystone_Renders/${image_src?.full_image}`}" alt="">
        </div>
    <div on:click={() => is_open = false} id="ppc-pfm-contols">
        <span class="material-symbols-outlined ppc-pfm-close-btn">
            close
        </span>
    </div>
     </section>Z
{/if}

<style>
    #ppc-portfolio-fullimage-modal {
        position: fixed;
        display: flex;
        width: 100%;
        height: calc(100vh - var(--navbar-height));
        top: var(--navbar-height);
        left: 0;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5);
    }

    #ppc-pfm-container {
        height: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #ppc-pfm-container img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    #ppc-pfm-contols {
        position: absolute;
        top: 2%;
        left: 90%;
        width: max-content;
        height: calc(var(--navbar-height)/2);
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--theme-color);
    }
    
    #ppc-pfm-contols span {
        font-size: var(--font-size-h2);
        transition: all 0.5s ease-in-out;
    }

    @media (pointer: fine) {
        #ppc-pfm-contols span:hover {
            cursor: default;
            color: var(--danger);
        }
    }

    @media only screen and (min-width: 669px) {
        #ppc-pfm-container img {
            border-radius: var(--boxes-roundness);
        }

        #ppc-pfm-container {
            height: 88%;
        }
    }
</style>