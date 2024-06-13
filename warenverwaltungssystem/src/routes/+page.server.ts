import { error, fail, type ActionResult } from "@sveltejs/kit";
import type { RequestEvent } from "./$types";
import type { RequestHandler } from '@sveltejs/kit';
import type { Actions } from './$types';
import type { PageServerLoad } from "./$types";
import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import { getContext, setContext } from "svelte";
import type { Company } from "$lib/types/company";
import type { Product } from "$lib/types/product";
import { CommonProgramFiles } from "$env/static/private";

type dataType = {
    companies: Company[],
    products: Product[]
}


export const load: PageServerLoad = (async () => {
	const companiesData = [{
		id: 1,
		name: "Bar"
	}, {
		id: 2,
		name: "Restaurant"
	}]
	const productsData = [
		{
			id: 1,
			name: "Cola",
			priceEuro: 2,
			priceLocal: 5
		},
		{
			id: 2,
			name: "Bohnen",
			priceEuro: 3,
			priceLocal: 8
		}
	]
	
	let companies: Company[]
	let products: Product[]
	
	
	companies =	companiesData.map((company) => {
			return {
				id: company.id,
				name: company.name
			}
		}
	)
	products = productsData.map((product) => {
		return {
			id: product.id,
			name: product.name,
			priceEuro: product.priceEuro,
			priceLocal: product.priceLocal
		}
	})
	console.log("Data loaded!")
	const returnValue: dataType = {
		companies: companies,
		products: products
	}
	return returnValue
})

export const actions = {
	search: async ({request}) => {
		const data: FormData = await request.formData()
        console.log(data.get("productName"))
		return {
			searchResult: ""
		}
	},
	addProduct: async ({request}) => {
		const data: FormData = await request.formData()
		const productName = data.get("productName")?.toString()
		const priceEuroData = data.get("priceEuro")
		const priceLocalData= data.get("priceLocal")
		if (!productName || !priceEuroData || !priceLocalData) {
			return 0
		}
		const priceEuro: number = +priceEuroData
		const priceLocal: number = +priceLocalData

	},
	addCompany: async ({request}) => {
		const data: FormData = await request.formData()
		let companyName = data.get("companyName")?.toString()
		let companyPassword = data.get("companyPassword")?.toString()
		if (!companyName || ! companyPassword || typeof companyName != "string" || typeof companyPassword != "string") {
			return 0
		}
	},
	addOrder: async ({request}) => {
		const data: FormData = await request.formData()
		const selectedCompanyIDData = data.get("selectedCompany")
		const selectedProductIDData = data.get("selectedProduct")
		const amountData = data.get("amount")
		if (!selectedCompanyIDData || !selectedProductIDData || !amountData) {
			return 0
		}
	}
} satisfies Actions
