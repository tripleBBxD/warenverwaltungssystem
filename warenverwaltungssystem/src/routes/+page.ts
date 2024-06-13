// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = false;

import type { Company } from "$lib/types/company";
import type { Product } from "$lib/types/product";
import type { PageLoad } from "./$types";
import type { Actions } from "@sveltejs/kit";

type dataType = {
    companies: Company[],
    products: Product[]
}


export const load: PageLoad = (async ({data}) => {
    console.log(data)
    const returnData: dataType = data
    return returnData
})

