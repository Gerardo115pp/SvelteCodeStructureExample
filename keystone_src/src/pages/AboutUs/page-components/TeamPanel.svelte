<script>
    import viewport from "../../../components/LazyLoader/actions/useViewPortAction";
    import { isMobile } from "../../../utils";
    
    export let members = [];
    $: members = groupMembers(members);
    

    function groupMembers(members) {
        let groups = {}; // {group_name: [members]}
        for (let member of members) {
            let group_name = member.role;
            if (groups[group_name] === undefined) {
                groups[group_name] = [];
            }
            groups[group_name].push(member);
        }

        let new_member_list = [];
        for (let group_name in groups) {
            new_member_list = new_member_list.concat(groups[group_name]);
        }

        return new_member_list;
    }

    const returnRandomDelay = () => {
        return Math.random();
    }



    const setAnimation = (e) => {
        if (e.eventPhase !== Event.AT_TARGET) {
            return;
        }

        const { target:element } = e;
        element.classList.add("slide-in-vertical");
        minimum = isMobile() ? 0.1 : 0.8;
        element.style.animationDelay = (minimum + (returnRandomDelay()/2)) + "s";
    }

    const countries_alpha2 = {
        "vietnam": "VN",
        "russia": "RU",
        "mexico": "MX",
        "united-states": "US",
        "china": "CN",
        "india": "IN",
        "japan": "JP",
        "united-kingdom": "GB",
        "portugal": "PT",
        "netherlands": "NL",
        "croatia": "HR",
        "argentine": "AR",
        "brazil": "BR",
        "poland": "PL",
        "germany": "DE",
        "spain": "ES",
        "switzerland": "CH",
        "italy": "IT",
        "france": "FR",
        "australia": "AU",
        "sweden": "SE",
        "norway": "NO",
        "denmark": "DK",
        "scotland": "GB",
        "finland": "FI",
        "iceland": "IS",
        "czechia": "CZ",
        "czech": "CZ",
        "turkey": "TR",
        "philippines": "PH",
        "nicaragua": "NI",
        "thailand": "TH",
        "moldova": "MD"
    }

    const getAlpha2 = (country) => {
        const country_alpha2 = countries_alpha2[country];
        return country_alpha2 ? country_alpha2 : 'mx';
    }
</script>

<section id="aupc-staff-team">
    <h3 id="aupc-st-title">Team Members</h3>
    <div id="aupc-st-members-container">
        {#each members as member}
            {#if member.country}
                <div class="aupc-st-mc-member-wrapper">
                    <div use:viewport 
                        on:viewportEnter={setAnimation}
                        
                        
                        class="aupc-st-mc-member">
                        <div class="aupc-st-mc-flag">
                            <img src={`https://flagicons.lipis.dev/flags/4x3/${getAlpha2(member.country.toLowerCase()).toLocaleLowerCase()}.svg`} alt="flag">
                        </div>
                        <div class="aupc-st-mc-name">
                            {member.name}
                        </div>
                        <div class="aupc-st-mc-role">
                            {member.role}
                        </div>
                    </div>
                </div>
            {/if}
        {/each}
    </div>
</section>

<style>
    #aupc-staff-team {
        padding: 4vh 0;
        margin-top: 17vh;
    }

    #aupc-st-title {
        font-size: var(--font-size-h2);
        margin-bottom: 2rem;
        text-align: center;
        color: white;
    }

    #aupc-st-members-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-top: 5vh;
    }

    .aupc-st-mc-member-wrapper {
        width: 12%;
        margin: 0.2vh 0.2vh;
        transition: all 0.3s ease-in-out;
    }
    
    .aupc-st-mc-member {
        display: flex;
        width: 100%;
        flex-direction: column;
        height: 25vh;
        background: linear-gradient(to right, rgba(133, 133, 133, 0.291), rgba(186, 186, 186, 0.211));
        justify-content: center;
        align-items: center;
        border: 1px solid white;
        border-radius: var(--boxes-roundness);
        backdrop-filter: blur(2px);
        user-select: none;
        transition: all 0.3s ease-in-out;
        z-index: 1;
    }
    
    @media (pointer: fine) {
        .aupc-st-mc-member-wrapper:hover {
            transform: scale(1.1);
            z-index: 2;
        }

        .aupc-st-mc-member:hover {
            background: linear-gradient(to right, rgba(124, 108, 78, 0.291), rgba(187, 173, 134, 0.211));
        }
    }

    .aupc-st-mc-flag {
        display: flex;
        width: 40%;
        overflow: hidden;
        border-radius: 0 0% 0 50%;
        background: white;
        justify-content: center;
        align-items: center;
    }

    .aupc-st-mc-name {
        color: white;
        margin-top: 1vh;
        font-size: var(--font-size-4);
    }   

    .aupc-st-mc-role {
        color: #ccc;
        margin-top: 1.2vh;
        font-size: var(--font-size-1);
        text-align: center;
    }

    @media only screen and (max-width: 668px) {
        .aupc-st-mc-member {
            backdrop-filter: unset;
        }

        .aupc-st-mc-member-wrapper {
            width: 32%;
        }
    }
</style>