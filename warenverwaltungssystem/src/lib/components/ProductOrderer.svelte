<script lang="ts">
    import "../../app.css"
    import SubmitButton from "./SubmitButton.svelte";
</script>

<div class="p-4 flex outline outline-1 rounded-md w-max h-max">
    <form class="flex gap-4" action="?/addOrder" method="POST">
        <label class="outline outline-1 rounded-md">
            <input class="outline-none pl-1 pr-1" type="text" name="productName">
        </label>
        <label class="outline outline-1 rounded-md">
            <input class="outline-none pl-1 pr-1" type="text" name="productName">
        </label>
    </form>
</div>