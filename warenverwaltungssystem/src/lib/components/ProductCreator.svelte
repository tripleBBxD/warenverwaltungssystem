
<script lang="ts">
    import type { Company } from "$lib/types/company";
    import SubmitButton from "./SubmitButton.svelte";
    import "../../app.css"
    import Selector from "./Selector.svelte";
    import CustomInput from "./CustomInput.svelte";

    let value = ""
</script>

<div class="p-4 flex flex-row outline justify-self-center outline-1 rounded-md w-max h-max">
    
    <form class="flex flex-col gap-4" action="?/addProduct" method="POST">
        <CustomInput type="text" name="productName" placeholder="Produktname"/>
        <CustomInput type="number" name="priceEuro" placeholder="Preis (€)" step="any"/>
        <CustomInput type="number" name="priceLocal" placeholder="Preis (B)" step="any"/>
        <SubmitButton />
    </form>
</div>