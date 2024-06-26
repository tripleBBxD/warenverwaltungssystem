import prisma from "$lib/prisma";
import { json, type RequestHandler } from '@sveltejs/kit';

export const DELETE: RequestHandler = async ({request}) => {
    const data = await request.json()
    const id: Number = data.get("id")
    const response = await prisma.order.delete({
        where: {
            id: +id
        }
    })

    return new Response(Object({success: true}))
}