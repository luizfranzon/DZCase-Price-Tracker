import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const response = await fetch("https://steamcommunity.com/market/priceoverview/?appid=730&currency=7&market_hash_name=Danger%20Zone%20Case")
    const data = await response.json()
    res.status(200).json(data)
  } catch (error) {
    console.error(error)
    res.status(500)
  }
}
