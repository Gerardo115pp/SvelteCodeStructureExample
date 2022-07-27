<script>
    export let thumbnailUrl = "";
    export let product_name = "";
    export let product_price = "";
    export let price_formatter = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2
    });
</script>

<div class="spc-pw-product-item">
    <div class="spc-pw-pi-image-wrapper">
        <img src={thumbnailUrl} alt="">
    </div>
    <div class="spc-pw-pi-info">
        <div class="spc-pw-pi-info-name">
            {product_name.toLowerCase()}
        </div>
        <div class="spc-pw-pi-info-bottom">
            <div class="spc-pw-pi-price">
                {price_formatter.format(product_price)}
            </div>
            <div class="spc-pw-pi-controls full-btn">Buy</div>
        </div>                        
    </div>
</div>


<style>
    .spc-pw-product-item {
        --spc-card-height: 55vh;
        display: flex;
        width: 30%;
        min-height: var(--spc-card-height);
        margin: 2em 1em 0;
        flex-direction: column;
        justify-content: space-between;
        /* border: 1px solid rgba(201, 193, 84, 0.41); */
        border-radius: var(--boxes-roundness);
        box-shadow:  0px 0px 10px 3px rgba(0,0,0,0.2);
        transition: all 0.2s ease-in-out;
        background-color: var(--clear-color);
        padding: 0 0 2.5vh 0;
    }

    @media (pointer: fine) {
        .spc-pw-product-item:hover {
            transform: scale(1.05);
        }
    }

    .spc-pw-pi-image-wrapper {
        width: 100%;
        height: calc(var(--spc-card-height) * 0.7);
        overflow: hidden;
    }

    .spc-pw-pi-image-wrapper img{
        width: 100%;
        height: 90%;
        object-fit: cover;
        border-radius: var(--boxes-roundness) var(--boxes-roundness) 0 0;
    }

    .spc-pw-pi-info-name {
        text-transform: capitalize;
        color: var(--dark-color);
        font-size: var(--font-size-h4);
        text-align: center;
    }

    .spc-pw-pi-info-bottom {
        display: flex;
        width: 75%;
        justify-content: space-between;
        align-items: center;
        margin: 4vh auto 0;
    }

    .spc-pw-pi-price {
        font-weight: bold;
        color: var(--dark-color);
        font-size: var(--font-size-2);
    }

    @media only screen and (max-width: 668px) {
        .spc-pw-product-item {
            width: 97%;
        }
    }
</style>