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
    import type { ActionData, PageData } from "./$types";
    import Selector from "$lib/components/Selector.svelte";
	import ProductOrderer from "$lib/components/ProductOrderer.svelte";
    import { page } from "$app/stores";

    
</script>

<div class="w-screen h-screen p-4">
    
    <div class="grid grid-flow-row gap-2 w-fit siz m-auto">
        <h1 class="text-center w-full outline outline-1 rounded-md ">Admin Panel</h1>
        <SearchWindow />
        <div class="flex flex-row gap-2 w-full justify-left w-">
            <CompanyCreator />
            <ProductCreator/>
            <ProductOrderer companies={$page.data.companies} products={$page.data.products}/>
        </div>
    </div>  
</div>  