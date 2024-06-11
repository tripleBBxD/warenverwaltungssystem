import type { ActionResult } from "@sveltejs/kit";
import type { RequestEvent } from "./$types";
import type { RequestHandler } from '@sveltejs/kit';
import type { Actions } from './$types';
import type { PageLoad } from "./$types";
import prisma from "$lib/prisma";

export const load: PageLoad = () => {
	const companies = prisma.company.findMany()
	console.log(companies)
}

export const actions = {
	search: async ({request}) => {
		const data: FormData = await request.formData()
        console.log(data.get("productName"))
	},
	addProduct: async ({request}) => {

	},
	addCompany: async ({request}) => {

	},
	addOrder: async ({request}) => {

	}
} satisfies Actions
