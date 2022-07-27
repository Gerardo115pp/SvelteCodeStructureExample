<script>
</script>


<div id="ncpc-benefits-banner">
    <div id="ncpc-bb-title">
        <h2>Benefits</h2>
    </div>
    <div id="ncpc-bb-explain">
        <p>We have a ranking system, each type of client has their own perks and exclusive benefits!        </p>
    </div>
    <div id="ncpc-bb-tiers">
        <ul>
            <li class="ncpc-bb-tier">
                <div class="ncpc-bb-tier-logo"><img src="/resources/images/Notable_Clients/ClientRanks/1_Customer-S.webp" alt="customer rank"></div>
                <p>The <span class="ncpc-bb-customer">Customer</span> is the person who has purchased at least 1 of our premade builds. The only benefit for them is that they have a different role from the others at our Discord.</p>
            </li>
            <li class="ncpc-bb-tier">
                <div class="ncpc-bb-tier-logo"><img src="/resources/images/Notable_Clients/ClientRanks/2_Client-S.webp" alt="client rank"></div>
                <p>A <span class="ncpc-bb-client">Client</span> is someone who has ordered at least 1 custom project. They get access to our build server and priority over the Customers. Still 100% upfront payment is needed.</p>
            </li>
            <li class="ncpc-bb-tier">
                <div class="ncpc-bb-tier-logo"><img src="/resources/images/Notable_Clients/ClientRanks/3_FrequentBuyer-S.webp" alt="frequent buyer rank"></div>
                <p>The <span class="ncpc-bb-frequent-buyer">Frequent Buyer</span> is one who has bought 3 custom projects. Has the same benefits as a Client but only 50% upfront payment is required. Also gets priority over Clients.</p>
            </li>
            <li class="ncpc-bb-tier">
                <div class="ncpc-bb-tier-logo"><img src="/resources/images/Notable_Clients/ClientRanks/4_FaithfulCustomer-S.webp" alt="Faithful Customer rank"></div>
                <p>A <span class="ncpc-bb-faithful-purchaser">Faithful Purchaser</span> is a person who has completed orders for over 1,000 Usd. It gets an exclusive channel with us. Also get priority over the Frequent Clients and others.</p>
            </li>
            <li class="ncpc-bb-tier">
                <div class="ncpc-bb-tier-logo"><img src="/resources/images/Notable_Clients/ClientRanks/5_Illustrious-S.webp" alt="Illustrious Rank"></div>
                <p>The <span class="ncpc-bb-illustrious">Illustrious</span> is one who has completed orders for over 5,000 Usd. It also has all the previous perks and absolute priority over everyone else. No upfront payment needed!</p>
            </li>
        </ul>
    </div>
</div>

<style>
    #ncpc-benefits-banner {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        padding: 8vh 0;
        justify-content: space-between;
        align-items: center;
        color: var(--purple-color);
    }

    #ncpc-bb-title h2 {
        font-size: var(--font-size-h3);
        font-weight: bold;
        margin: 0;
        padding: 0;
    }

    #ncpc-bb-explain {
        font-size: var(--font-size-2);
        margin: 1vh 0;
        padding: 0;
    }

    #ncpc-bb-tiers {
        width: 60%;
    }

    #ncpc-bb-tiers ul {
        padding: 0;
        margin: 2vh 0;
        font-size: var(--font-size-2);
    }
    
    #ncpc-bb-tiers li {
        display: flex;
        list-style: disc !important;
        margin: 1.8vh 0;
    }

    .ncpc-bb-tier img {
        width: 2vw;
    }

    .ncpc-bb-tier div {
        margin-right: 1vw;
    }

    .ncpc-bb-customer {
        color: #02dfdf;
    }

    .ncpc-bb-client {
        color: #02dfb7;
    }

    .ncpc-bb-frequent-buyer {
        color: #02df69;
    }

    .ncpc-bb-faithful-purchaser {
        color: #df8a02;
    }

    .ncpc-bb-illustrious {
        color: #dfaf02;
    }

    @media only screen and (max-width: 668px) {
        #ncpc-bb-explain {
            width: 90%;
            text-align: center;
            margin-top: 2vh;
        }

        #ncpc-bb-tiers {
            width: 76%;
        }
    }
</style>
