<script lang="ts">
    import "../../app.css"
	import SubmitButton from "./SubmitButton.svelte";
    import CustomInput from "./CustomInput.svelte";
</script>

<div class="p-4 flex flex-col outline justify-self-start outline-1 rounded-md w-max h-max">
    <form class="flex gap-4 flex-col" action="?/addCompany" method="POST">
        <CustomInput type="text" name="companyName" placeholder="Firmenname"/>
        <CustomInput type="text" name="companyPassword" placeholder="Firmenpasswort"/>
        <SubmitButton content="Firma erstellen"/>
    </form>
</div>