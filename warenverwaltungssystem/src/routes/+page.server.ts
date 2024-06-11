import { error, fail, type ActionResult } from "@sveltejs/kit";
import type { RequestEvent } from "./$types";
import type { RequestHandler } from '@sveltejs/kit';
import type { Actions } from './$types';
import type { PageLoad } from "./$types";
import prisma from "$lib/prisma";
import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import { getContext, setContext } from "svelte";
import type { Company } from "$lib/types/company";
import type { Product } from "$lib/types/product";

export const load: PageLoad = (async () => {
	const companiesData = await prisma.company.findMany()
	const productsData = await prisma.product.findMany()
	
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
	return {
		companies: companies,
		products: products
	}
})

export const actions = {
	search: async ({request}) => {
		const data: FormData = await request.formData()
        console.log(data.get("productName"))
	},
	addProduct: async ({request}) => {

	},
	addCompany: async ({request}) => {
		const data: FormData = await request.formData()
		let companyName = data.get("companyName")?.toString()
		let companyPassword = data.get("companyPassword")?.toString()
		if (!companyName || ! companyPassword || typeof companyName != "string" || typeof companyPassword != "string") {
			fail(400)
			return 0
		}
		const answer = await prisma.company.create({
			data: {
				name: companyName,
				password: companyPassword
			}
		})
		console.log(answer)
		return answer
	},
	addOrder: async ({request}) => {

	}
} satisfies Actions
