<script lang="ts">
    import "../app.css"
    import SearchWindow from "../lib/components/SearchWindow.svelte"
    import CompanyCreator from "$lib/components/CompanyCreator.svelte";
	import { getContext } from "svelte";
	import ProductCreator from "$lib/components/ProductCreator.svelte";
    import type { Company } from "$lib/types/company";
    import { setContext } from "svelte";
    import { writable } from "svelte/store";
    import type { Product } from "$lib/types/product";
    import type { PageData } from "./$types";

    export let data: PageData

    const companies = writable<Company[]>()
    const products = writable<Product[]>()
    setContext("companies", companies)
    setContext("products", products)

    companies.set(data.companies)
    products.set(data.products)

    let companyList: Company[]

    companies.subscribe((value) => {
        companyList = value
        console.log(companyList)
    })

    console.log(companies)
    

</script>

<div class="w-screen h-screen">
    <SearchWindow />
    <CompanyCreator />
    <ProductCreator companies={$companies} />
</div>