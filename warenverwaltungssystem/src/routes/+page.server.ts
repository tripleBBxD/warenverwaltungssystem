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
import { CommonProgramFiles } from "$env/static/private";

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
		const data: FormData = await request.formData()
		const productName = data.get("productName")?.toString()
		const priceEuroData = data.get("priceEuro")
		const priceLocalData= data.get("priceLocal")
		if (!productName || !priceEuroData || !priceLocalData) {
			fail(400)
			return 0
		}
		const priceEuro: number = +priceEuroData
		const priceLocal: number = +priceLocalData
		await prisma.product.create({
			data: {
				name: productName,
				priceEuro: priceEuro,
				priceLocal: priceLocal
			}
		})
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
		const data: FormData = await request.formData()
		const selectedCompanyIDData = data.get("selectedCompany")
		const selectedProductIDData = data.get("selectedProduct")
		const amountData = data.get("amount")
		if (!selectedCompanyIDData || !selectedProductIDData || !amountData) {
			fail(400)
			return 0
		}
		const selectedCompanyID = +selectedCompanyIDData
		const selectedProductID = +selectedProductIDData
		const amount= +amountData
		const answer = await prisma.order.create({
			data: {
				amount: amount,
				buyer: {
					connect: {id: selectedCompanyID}
				},
				purchasedProduct: {
					connect: {id: selectedProductID}
				}
			}
		})
	}
} satisfies Actions
