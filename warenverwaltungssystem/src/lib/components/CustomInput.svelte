<script lang="ts">
    import "../../app.css"
    export let type: string = "text"
    export let name: string
    export let placeholder: string = ""
    export let step: string = "2"
</script>

<label class="outline outline-1 rounded-md w-full">
    <input class="outline-none pl-1 pr-1" type={type} name={name} placeholder={placeholder} step={step}>
</label>