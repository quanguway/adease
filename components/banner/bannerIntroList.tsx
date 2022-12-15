import {BannerIntroItem} from '../patials/patials'
import {dataBannerItem} from '../patials/data'

export default function BannerIntroList () {
  return (
    <div className="flex flex-col">
      {dataBannerItem.map((data, index) => {
        return (<BannerIntroItem props={data}/>)
      })}
    </div>
  )
}