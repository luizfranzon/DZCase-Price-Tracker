import dzCaseImage from "public/box.png"
import Image from 'next/image'
import { useEffect, useState } from "react"

export default function Home() {

  const [data, setData] = useState({
    "success": true,
    "lowest_price": "R$ 0,00",
    "volume": "00000",
    "median_price": "R$ 0,00"
  })

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("./api/dgcaseprice")
        .then(res => res.json())
        .then(data => setData(data))
    }, 2000);
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="flex items-center flex-col w-[778px] max-w-[778px] ">
      <h1 className="text-5xl font-bold py-20">DZCase Price Tracker</h1>
      <main className="bg-[#30363d] p-8 rounded-md max-w-[778px] w-full flex items-center flex-col">
        <Image className="mt-8" src={dzCaseImage} alt="Caixa da Zona de perigo" width={280} />
        <div className="w-full h-[2px] bg-white/30 rounded-xl my-9"></div>
        <section className="flex flex-col items-center py-6">
          <span className="text-7xl font-bold">R$ <span className="text-[#99C300]">{data.lowest_price.split(" ")[1]}</span></span>
          <span className="text-lg text-white/70 mt-2">Vendidas das últimas 24h: {data.volume}</span>
        </section>
      </main>
    </div>
  )
}
