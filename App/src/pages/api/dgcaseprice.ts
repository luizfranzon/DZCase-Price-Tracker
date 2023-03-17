// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  fetch("https://steamcommunity.com/market/priceoverview/?appid=730&currency=7&market_hash_name=Danger%20Zone%20Case")
    .then(res => res.json())
    .then(data => res.status(200).json(data))
  
}
