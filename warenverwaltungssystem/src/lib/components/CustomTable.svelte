<script lang="ts">
    import "../../app.css"
    export let tableHeadingData: String[]
    export let tableData: String[][]
</script>

<table class="">
    <thead class="justify-items-start">
        {#each tableHeadingData as tableHeading}
             <th class="text-left">{tableHeading}</th>
        {/each}
    </thead>
    <tbody>
        {#each tableData as tableRow}
             <tr>
                {#each tableRow as tableCell}
                    <td>{tableCell}</td>
                {/each}
             </tr>
        {/each}
    </tbody>
</table>
