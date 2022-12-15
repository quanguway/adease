import Image from 'next/image' 
import {CheckBoxInfo} from '../patials/patials.tsx'
import {dataCheckBoxInfos} from '../patials/data.tsx'


export default function BannerIntroTop () {
  return (
    <div className="flex md:flex-row sm:flex-col">
      <div className="flex w-full items-center">
        <div className="flex flex-col flex-wrap max-w-[630px] md:min-h-[386px] mr-[30px] ">
          <p className="text-lg font-bold text-primary text-6xl">
            Digital Marketing. Made Easy. 
          </p><br/>
          <p className="text-2xl">
            Automated digital marketing for small businesses & start-ups
          </p>
          <p className="text-2xl">
            Less work, better decisions, better results! 
          </p>
          <div className="mt-[36px]">
            <button className="rounded-full border-2 border-primary bg-white py-2 px-6 text-primary mr-[24px] hover:bg-primary hover:text-white">Try now for free</button>

            <button className="rounded-full bg-primary py-2 px-6 text-white hover:bg-primarylight">Book a demo</button>
          </div>
          <div className="flex mt-[16px]">
            {dataCheckBoxInfos.map((data, index) => {
              return (<CheckBoxInfo props={data}/>) 
            })}
            
          </div>
        </div>
      </div>
      <div>
          <Image
            src='/img/homepage/header/illustration.png'
            alt='logo'
            width={600}
            height={517.33}
            className="h-[517.33px] w-[600px]"
            quality={60}
          />
      </div>
    </div>
  )
    
}
