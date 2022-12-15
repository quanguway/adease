import Image from 'next/image'
import {BannerSliderTop} from '../patials/patials.tsx'

export default function BannerEndTop (){
	return (
		<div>
	    <div className="flex flex-nowrap overflow-x-auto ml-10">
	      <BannerSliderTop/>
	      <BannerSliderTop/>
	      <BannerSliderTop/>
	      <BannerSliderTop/>
	    </div>
	    <button className="rounded-full bg-primary py-2 px-4 text-white hover:bg-primarylight">Try now for free </button>
    </div>
	)
	
}