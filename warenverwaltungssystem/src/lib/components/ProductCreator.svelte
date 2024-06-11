
<script lang="ts">
    import type { Company } from "$lib/types/company";
    import SubmitButton from "./SubmitButton.svelte";
    import "../../app.css"
    import Selector from "./Selector.svelte";
    let value = ""
    
</script>

<div class="p-4 flex flex-row outline outline-1 rounded-md w-max h-max">
    
    <form class="flex gap-4" action="?/addProduct" method="POST">
        
        <label class="outline outline-1 rounded-md">
            <input class="outline-none pl-1 pr-1" type="text" name="productName" placeholder="Produktname">
        </label>
        <label class="outline outline-1 rounded-md">
            <input class="outline-none pl-1 pr-1" type="number" name="priceEuro" placeholder="Preis (€)" step="any">
        </label>
        <label class="outline outline-1 rounded-md">
            <input class="outline-none pl-1 pr-1" type="number" name="priceLocal" placeholder="Preis (B)" step="any">
        </label>
        <SubmitButton />
    </form>
</div>