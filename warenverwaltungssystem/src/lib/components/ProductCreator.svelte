
<script lang="ts">
    import type { Company } from "$lib/types/company";
    import SubmitButton from "./SubmitButton.svelte";
    import "../../app.css"
    export let companies: Company[]
    const companyNameList = companies.map((company) => {
        return company.name
    })
</script>

<div class="p-4 flex outline outline-1 rounded-md w-max h-max">
    <form class="flex gap-4" action="?/addOrder" method="POST">
        <select name="" id=""></select>
        <label class="outline outline-1 rounded-md">
            <input class="outline-none pl-1 pr-1" type="text" name="productName">
        </label>
        <SubmitButton />
    </form>
</div>