<script lang="ts">
    import "../../app.css"
    import SubmitButton from "./SubmitButton.svelte";
    import Selector from "./Selector.svelte";
    import type { Company } from "$lib/types/company";
    import type { Product } from "$lib/types/product";

    export let companies: Company[]
    export let products: Product[]
    const companyNameList: string[] = companies.map((company) => {
        return company.name
    })
    const productNameList: string[] = products.map((product) => {
        return product.name
    })
</script>

<div class="p-4 flex outline outline-1 rounded-md w-max h-max">
    <form class="flex gap-4" action="?/addOrder" method="POST" id="ProductForm">
        <Selector options={companyNameList} form="ProductForm" name="selectedCompany" placeholder="Firma"/>
        <Selector options={productNameList} form="ProductForm" name="selectedProduct" placeholder="Produkt"/>
        <label class="outline outline-1 rounded-md">
            <input class="outline-none pl-1 pr-1" type="text" name="amount" placeholder="Menge">
        </label>
        <SubmitButton/>
    </form>
</div>