import {BannerIntroItem} from '../patials/patials'
import {dataBannerItem} from '../patials/data'
import React, { useState, useEffect  } from 'react';
import {BannerIntroJson} from "../../json/bannerIntroJson"


export default function BannerIntroList ({items}:{items:any}) {

  const [itemBanners, setItemBanners] = useState<any[]>([]);

  useEffect(() => {

    const collectionBanner = items.map((data:any, index:any) => {
      return new BannerIntroJson(data).custom();
    });
    setItemBanners([...itemBanners, ...collectionBanner]);

  },[]);

  return (
    <div className="flex flex-col">
      {(itemBanners as unknown as any[]).map((data:any, index:any) => {
        return (<BannerIntroItem props={data}/>)
      })}
    </div>
  )
}