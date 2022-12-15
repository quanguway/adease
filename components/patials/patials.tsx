import Image from 'next/image' 

export const CheckBoxInfo = ({props:any}) => {
	return (
		<div className="flex items-center mr-[24px]">
      <Image className="mr-[4px]" src='/img/homepage/header/CheckboxCustom.svg' alt='checkbox' width={31} height={31}/>
      <span>{props.label}</span>
    </div>
	)	
}

export const IconLabel = ({props:any}) => {
	return (
		<div className="flex flex-col">
      <Image src={props.icon} width={62} height={62} alt={props.alt} />
      <p className="font-semibold mt-2">{props.label}</p>
    </div>
	)	
}

 

export const BannerIntroItem = ({props:any}) => {
  const rowReverse = props.reverse ? "flex-row-reverse" : "";
  const bgReverse = props.reverse ? "right-0" : "left-0";
  const directionShadow = props.reverse ? "40px" : "-40px";
  const shadowColor = props.shadow;
	return (
		<div className={`flex sm:flex-col mt-[83px] justify-between space-x-[70px] ${rowReverse}`}>
      <Image
          src={props.bg}
          alt='bg'
          width={240}
          height={470}
          quality={40}
          className={`absolute ${bgReverse} mt-12`}
        />
      <div>
        <div className="flex flex-col flex-wrap max-w-[520px] md:min-h-[386px] mr-[30px] ">
          <p className="font-bold text-primary text-2xl">
            {props.type} 
          </p>
          <p className="text-[42px] font-bold">
            {props.title}
          </p>
           <div className="list-disc" dangerouslySetInnerHTML={{ __html: props.content }}/>
           
          <div className="mt-[36px]">
            <button className="rounded-full bg-primary py-2 px-6 text-white">{props.button}</button>
          </div>
        </div>
      </div>
    

      <div class={`items-center ${shadowColor}`}>
        <Image
          src={props.image}
          alt='logo'
          width={570}
          height={403}
          quality={40}
          className={`rounded-lg`}
        />
      </div>

    </div>
	)	
}


export const BannerSliderTop = ({}) => {
  return (
    <div className="ml-0">
      <div className="w-full flex flex-col justify-center sm:w-[900px] w-[1280px]">
        <div className="w-full flex justify-center">
          
          <h3 className=" flex flex-wrap text-4xl font-bold mb-[90px] mt-[10px] text-center">Why small businesses & start-ups love AdEase</h3>
        </div>
          <div className="flex md:flex-row sm:flex-col md:justify-between space-x-[56px]">

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
              <div className="w-full flex justify-center mt-10">
                <div className="flex flex-row space-x-[12px]">
                  <Image src="/img/homepage/bannerEnd/icon_change_slider.svg" width={16} height={16} />
                  <Image src="/img/homepage/bannerEnd/icon_change_slider_active.svg" width={16} height={16} />
                  <Image src="/img/homepage/bannerEnd/icon_change_slider.svg" width={16} height={16} />
                  <Image src="/img/homepage/bannerEnd/icon_change_slider.svg" width={16} height={16} />
                </div>
              </div>
                
              
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
  
}