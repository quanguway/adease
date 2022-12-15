import {BannerIntroItem} from '../patials/patials.tsx'
import {dataBannerItem} from '../patials/data.tsx'

export default function BannerIntroList () {
  return (
    <div className="flex flex-col">
      {dataBannerItem.map((data, index) => {
        return (<BannerIntroItem props={data}/>)
      })}
    </div>
  )
}