// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    userId: string,
    id: string,
    title: string,
}

export default async function handler( req: NextApiRequest, res: NextApiResponse<Data>) {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts");
    let blogs = await data.json();
    res.status(200).json(blogs)
}
