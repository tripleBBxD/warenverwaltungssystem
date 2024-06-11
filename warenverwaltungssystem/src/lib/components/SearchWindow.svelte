<script lang="ts">
    import "../../app.css"
</script>

<div class="p-4 flex flex-col outline outline-1 rounded-md w-max h-max">
    <form class="grid grid-flow-col gap-4" action="?/search" method="GET">
        <label class="outline outline-1 rounded-md">
            <input class="outline-none pl-1 pr-1" type="text" name="productName">
        </label>
        <button type="submit" class="outline outline-1 rounded-md left-2 pl-2 pr-2">&#x2315</button>
    </form>
    <table>

    </table>
</div>