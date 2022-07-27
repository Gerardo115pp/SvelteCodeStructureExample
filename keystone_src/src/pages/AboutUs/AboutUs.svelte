<script>
    import Hero from "../../components/Hero/Hero.svelte";
    import AboutUsBanner from './page-components/AboutUsDescription.svelte';
    import MembersListing from './page-components/MembersListing.svelte';
    import TeamPanel from './page-components/TeamPanel.svelte';
    import { onMount } from "svelte";

    let about_data = {}
    window.scrollTo(0, 0);

    onMount(() => {
        const about_data_url = '/resources/data/team_members.json';

        fetch(about_data_url)
            .then(response => response.json())
            .then(data => {
                about_data = data;
            });
    })
    
</script>

<main id="about-us-page-content">
    <Hero hero_title="About Us" 
        image_url="/resources/images/top_page_banners/6about-us-M.webp"
        hd_image="/resources/images/top_page_banners/6about-us-original.webp"
    />
    <AboutUsBanner image_url="/resources/images/section_pages/aboutUs-aboutUs-L.webp"/>
    <div id="aupc-members-panel">
        {#if about_data.council }
             <MembersListing id={"aupc-mp-council-team"} extra_class="aupc-mp-memebers-list" members={about_data.council} team_name="Council" />
        {/if}
        {#if about_data.management }
             <MembersListing id={"aupc-mp-management-team"} extra_class="aupc-mp-memebers-list" members={about_data.management} team_name="Management" />
        {/if}
        {#if about_data.staff }
             <TeamPanel members={about_data.staff} team_name="Team" />
        {/if}
    </div>
</main>

<style>

    #aupc-members-panel {
        background: var(--purple-gradient-color);
        width: 100vw;
        max-width: 100%;
        overflow: hidden;
        padding: 5vh 5vw;
        margin: 5vh 0 0;
        box-shadow: inset 0px 0px 25px 10px rgba(0, 0, 0, 0.1);
    }

    :global(.aupc-mp-memebers-list) {
        margin-top: 15vh;
    }
    
    :global(.aupc-mp-memebers-list:first-child) {
        margin-top: 0;
    }
</style>