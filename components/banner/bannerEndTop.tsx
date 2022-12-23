import Image from 'next/image'
import {BannerSliderTop} from '../patials/patials'
import React, { useState, useEffect } from 'react';
import {BannerSliderJson} from "../../json/bannerSliderJson"


export default function BannerEndTop ({items}:{items:any}){

		const[itemBanners, setItemBanners] = useState<any[]>([]);

	  const [indexSlider, setIndexSlider] = useState(0);

	  const handleTranslateSlider = (index:any) => {
	    setIndexSlider(index) 
	  }

		useEffect(() => {
    	const collectionBanner = items.map((data:any, index:any) => {
      return new BannerSliderJson(data).custom();
	    });
	    setItemBanners([...collectionBanner]);
  	}, []);

	  // useEffect(() => {
		//   const timer = setTimeout(() => {
		//   	console.log(itemBanners.lenght-1)
		//   	if(indexSlider < itemBanners.lenght-1) {
		//   		var indexSliderIncrease = indexSlider + 1;
		//   		setIndexSlider(indexSliderIncrease);
		//   	} else {
		//   		setIndexSlider(0);
		//   	}
		//   }, 1000);
		//   return () => clearTimeout(timer);
		// }, [indexSlider]);

	
	return (
		<>
			<div className="overflow-hidden min-h-[520px] lg:min-h-[734px] sm:min-h-[674px] relative">
				<div className="transition-all absolute left-0 w-full h-full" style={{transform: `translateX(${indexSlider*-100}%)`}}>
					{
						(itemBanners as unknown as any[]).map((data, index) => {
							return (<BannerSliderTop leftPosition={`${index*100}%`} data={data}/>)
						}) 
					}
				</div>
				<div className="absolute z-20 flex w-full xl:w-full h-full sm:flex-col justify-center items-center lg:items-end sm:justify-end sm:items-center">
					{/*<div className="w-[400px]"></div>*/}
						
	        <div className="flex space-x-[12px] justify-center ml-[286px] mt-[355px] xl:mt-[426px] xl:ml-[263px] lg:ml-0 lg:mt-0 lg:mb-4">
	        	{(itemBanners as unknown as any[]).map((data, index) => {
	        		return (<div className={`w-[16px] h-[16px] rounded-full border-[3px] border-primary opacity-40 ${index === indexSlider ? 'bg-primary opacity-100' : ''}`} onClick={() => handleTranslateSlider(index)}></div>)
		        	}) 
						}
          </div>

      	</div>
			</div>
			
	  </>
	)
	
}