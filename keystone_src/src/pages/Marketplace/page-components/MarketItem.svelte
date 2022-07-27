<script>
    export let image_url;
    export let item_name = "item_name";
    export let item_description = "item_description";
    export let item_price = "item_price";
</script>

<li class="marketplace-item-container round-box">
    <div class="mic-image-wrapper">
        <img src={image_url} alt="item">
    </div>
    <h3 class="mic-item-name">{item_name}</h3>
    <p class="mic-item-description">
        {item_description}
    </p>
    <div class="mic-item-price">
        {item_price}
    </div>
    <div class="mic-item-actions">
        <a href={null} class="full-btn">
            Buy Now
        </a>
    </div>
</li>

<style>
    .marketplace-item-container {
        display: flex;
        width: 45%;
        height: 83vh;
        flex-direction: column;
        padding: 3rem;
        border: 1px solid #ccc;
        margin: 2rem;
        align-items: center;
        justify-content: space-between;
    }

    .mic-image-wrapper img {
        width: 100%;
    }

    .mic-item-name {
        font-size: 2em;
        font-weight: bold;
    }
    
    .mic-item-description {
        font-size: 1.3em;
    }

    .mic-item-price {
        font-size: 1.2em;
        font-weight: bold;
    }

    @media only screen and (max-width: 668px) {
        .marketplace-item-container {
            width: 100%;
            padding: 4vh 5vw;
        }

        .mic-item-description {
            text-align: center;
        }
    }
</style>