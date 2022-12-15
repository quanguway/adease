import Image from 'next/image'

export default function BannerSliderTop (){
	return (
    <div className="flex flex-col justify-center w-full">
      <h3 className="text-4xl font-bold mb-[90px] mt-[10px] text-center">Why small businesses & start-ups love AdEase</h3>
      <div className="flex md:flex-row sm:flex-col md:justify-between">

      <Image
        src='/img/homepage/bannerEnd/scroll1.png'
        alt='logo'
        width={400}
        height={400}
        className="rounded-lg"
        quality={60}
      />

      <div className="flex w-full flex-col justify-center justify-items-center">
        <div className="flex flex-col max-w-[630px] min-h-[386px] ">
          <p className="text-lg text-2xl text-center">
            Being a director of photography and a business owner can be overwhelming at times. To add digital marketing workload on the list would greatly impact my efficiently and the ability to stay creative focus on growing the business.
          </p>
          <div className="flex justify-center my-[36px]">
            <div className="w-[78px] h-[3px] bg-primary items-center"></div>
          </div>
          
          <p className="text-2xl font-bold text-center">
            MR JOSH LE
          </p>
          <p className="text-base text-center">
            Founder of Mango Media Studio
          </p>
          <div className="flex flex-row space-x-[12px] fixed">
            <Image src="/img/homepage/bannerEnd/icon_change_slider.svg" alt="slider" width={16} height={16} />
            <Image src="/img/homepage/bannerEnd/icon_change_slider_active.svg" alt="slider" width={16} height={16} />
            <Image src="/img/homepage/bannerEnd/icon_change_slider.svg" alt="slider" width={16} height={16} />
            <Image src="/img/homepage/bannerEnd/icon_change_slider.svg" alt="slider" width={16} height={16} />
          </div>
          
        </div>
      </div>
    </div>
    
      
    </div>
	)
	
}