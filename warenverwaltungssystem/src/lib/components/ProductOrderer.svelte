<script lang="ts">
    import "../../app.css"
    import SubmitButton from "./SubmitButton.svelte";
    import Selector from "./Selector.svelte";
    import type { Company } from "$lib/types/company";
    import type { Product } from "$lib/types/product";
    import CustomInput from "./CustomInput.svelte";

    export let companies: Company[]
    export let products: Product[]
    const companyNameList: string[] = companies.map((company) => {
        return company.name
    })
    const productNameList: string[] = products.map((product) => {
        return product.name
    })
</script>

<div class="p-4 flex  outline outline-1 justify-self-end rounded-md w-max h-max">
    <form class="flex flex-col gap-4" action="?/addOrder" method="POST" id="ProductForm">
        <Selector options={companyNameList} form="ProductForm" name="selectedCompany" placeholder="Firma"/>
        <Selector options={productNameList} form="ProductForm" name="selectedProduct" placeholder="Produkt"/>
        <CustomInput type="number" name="amount" placeholder="Menge" step="any"/>
        <SubmitButton/>
    </form>
</div>