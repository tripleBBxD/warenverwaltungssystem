<script lang="ts">
    import { expoOut } from "svelte/easing";
import "../../app.css"
    export let options: string[]
    export let id: number = 0
    export let form: string
    export let name: string
    export let placeholder: string
</script>

<select bind:value={id} form={form} name={name}>
    <option value="" disabled selected>{placeholder}</option>
    {#each options as option,i}
         <option value={i + 1}>{option}</option>
    {/each}
</select>