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
    import Selector from "$lib/components/Selector.svelte";
	import ProductOrderer from "$lib/components/ProductOrderer.svelte";

    export let data: PageData

    const companies = writable<Company[]>()
    const products = writable<Product[]>()
    setContext("companies", companies)
    setContext("products", products)

    companies.set(data.companies)
    products.set(data.products)

    let companyList: Company[]
    let productList: Product[]

    companies.subscribe((value) => {
        companyList = value
        console.log(companyList)
    })
    products.subscribe((value) => {
        productList = value
    })

    console.log(companies)
    let id: number


</script>

<div class="w-screen h-screen">
    <SearchWindow />
    <CompanyCreator />
    <ProductCreator/>
    <ProductOrderer companies={companyList} products={productList}/>
</div>