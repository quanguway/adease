import Image from 'next/image' 
import {CheckBoxInfo} from '../patials/patials'
import {dataCheckBoxInfos} from '../patials/data'


export default function BannerIntroTop () {
  return (
    <div className="flex md:flex-row sm:flex-col sm:flex-col-reverse sm:items-center">
      <div className="flex items-center sm:flex sm:justify-center ">
        <div className="flex flex-col max-w-[630px] md:min-h-[386px] sm:justify-items-center">
          <p className="font-bold text-primary text-6xl md:text-4xl sm:mt-5 sm:text-3xl">
            Digital Marketing. Made Easy. 
          </p><br/>
          <p className="text-2xl md:text-xl sm:text-lg">
            Automated digital marketing for small businesses & start-ups
          </p>
          <p className="text-2xl md:text-xl sm:text-lg">
            Less work, better decisions, better results! 
          </p>
          <div className="mt-[36px] sm:flex sm:w-full">
            <button className="rounded-full border-2 border-primary bg-white py-2 px-6 text-primary mr-[24px] hover:bg-primary hover:text-white sm:text-xs sm:py-1 sm:px-3">Try now for free</button>

            <button className="rounded-full bg-primary py-2 px-6 text-white hover:bg-primarylight sm:text-xs sm:py-1 sm:px-3">Book a demo</button>
          </div>
          <div className="flex mt-[16px]">
            {(dataCheckBoxInfos as unknown as any[]).map((data, index) => {
              return (<CheckBoxInfo props={data}/>) 
            })}
            
          </div>
        </div>
      </div>
      <div className="w-[600px] h-[417px] md:w-[390px] md:h-[290px] sm:w-[290px] sm:h-[190px] relative">
          <Image
            src='/img/homepage/header/illustration.png'
            alt='logo'
            layout="fill"
            quality={60}
          />
      </div>
    </div>
  )
    
}
