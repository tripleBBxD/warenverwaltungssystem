<script lang="ts">
    import "../../app.css"
	import type { ActionData, PageData } from "../../routes/$types";
    import CustomInput from "./CustomInput.svelte";
    import CustomTable from "./CustomTable.svelte";
    import { load } from "../../routes/+page";
	
	export let tableData= [["Lorem", "Ipsum", "Dolor", "Sit", "Amet"]]

    async function deleteOrder(id: Number) {
        await fetch("$routes/api/deleteOrder", {
            method: "delete",
            body: "id"
        })
    }
</script>

<div class="p-4 flex flex-col gap-5 outline outline-1 rounded-md w-full h-full">
    <form class="flex flex-row gap-4" action="?/search" method="GET">
        <CustomInput type="text" name="productName" placeholder="Suchen"/>
        <button type="submit" class="outline outline-1 rounded-md left-2 pl-2 pr-2">&#x2315</button>
    </form>
    <CustomTable tableHeadingData={["Firma", "Produktname", "Preis (€)", "Preis(B)", "Löschen"]} tableData={tableData}/>
</div>