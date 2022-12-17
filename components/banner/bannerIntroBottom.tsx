import Image from 'next/image' 
import {IconLabel} from '../patials/patials'
import {dataIconLabels} from '../patials/data'


export default function BannerIntroBottom (){
  return (
    <div className="flex md:flex-col md:items-center">
    	<div className="w-[600px] h-[417px] md:w-[390px] md:h-[290px] sm:w-[290px] sm:h-[190px] relative">
          <Image
            src='/img/homepage/bannerIntroBottom/illustration.png'
            alt='logo'
            fill
            quality={60}
          />
      </div>
      <div className="flex w-full items-center sm:flex sm:justify-center">
        <div className="flex flex-col max-w-[630px] md:min-h-[386px] sm:justify-items-center">
          <p className="text-lg font-bold text-primary text-6xl mb-5 md:text-4xl sm:mt-5 sm:text-3xl">
            AdEase helps your small business grow faster  
          </p>
          <h3 className="text-2xl mb-2 text-semibold">
            Spend your time and money more effectively.
          </h3>
          <p className="text-base">
            Take the guesswork and hard work out of running digital ads. Simply follow the step-by-step instructions. 
          </p>
          <p className="text-base">
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
          	<button className="rounded-full bg-primary py-2 px-6 text-white hover:bg-primarylight">Get your free strategy now</button>
          </div>
        </div>
      </div>
      
    </div>
  )
    
}

