import Image from 'next/image' 
import {IconLabel} from '../patials/patials'
import {dataIconLabels} from '../patials/data'


export default function BannerIntroBottom (){
  return (
    <div className="flex items-center md:flex-col md:items-center sm:mt-10">
    	<div className="flex items-center w-[598px] h-[538px] lg:h-[471px] lg:w-[475px] sm:w-[290px] sm:h-[190px] relative">
          <Image
            src='/img/homepage/bannerIntroBottom/illustration.png'
            alt='logo'
            quality={60}
            width={598}
            height={538}
            className="object-cover"
          />
      </div>
      <div className="flex w-full items-center sm:flex sm:justify-center">
        <div className="flex flex-col max-w-[630px] md:min-h-[386px] sm:justify-items-center">
          <p className="font-bold text-primary text-[42px] mb-5 lg:text-4xl sm:mt-14 sm:text-3xl">
            AdEase helps your small business grow faster  
          </p>
          <h3 className="text-2xl mb-2 text-semibold">
            Spend your time and money more effectively.
          </h3>
          <p className="text-[18px]">
            Take the guesswork and hard work out of running digital ads. Simply follow the step-by-step instructions. 
          </p>
          <p className="text-[18px]">
            Automate your strategy, operations and analytics on Google, TikTok, YouTube, Facebook, Instagram, Zalo and LinkedIn.  
          </p>
          
          <div className="flex mt-[16px] justify-between px-10 mt-10 md:justify-around sm:px-0">
          	{(dataIconLabels as unknown as any[]).map((data, index) => {
          		return (
          			<IconLabel props={data}/>
          		)
          	})}
          </div>
          <div className="mt-5 sm:flex sm:justify-center">
          	<button className="rounded-full bg-primary py-3 px-7 font-bold text-[18px] text-white hover:bg-primarylight">Get your free strategy now</button>
          </div>
        </div>
      </div>
      
    </div>
  )
    
}

