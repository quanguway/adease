import Image from 'next/image' 

export const CheckBoxInfo = ({props}:{props:any}) => {
	return (
		<div className="flex items-center mr-[24px]">
      <Image className="mr-[4px]" src='/img/homepage/header/CheckboxCustom.svg' alt='checkbox' width={31} height={31}/>
      <span>{props.label}</span>
    </div>
	)	
}

export const IconLabel = ({props}:{props:any}) => {
	return (
		<div className="flex flex-col items-center">
      <div className=" w-[64px] h-[64px] md:w-10 md:h-10 sm:w-9 sm:h-9 relative">
        <Image src={props.icon} fill alt={props.alt} />
      </div>
      
      <p className="font-semibold mt-2">{props.label}</p>
    </div>
	)	
}

 

export const BannerIntroItem = ({props}:{props:any}) => {
  const rowReverse = props.reverse ? "flex-row-reverse" : "";
  const bgReverse = props.reverse ? "right-0" : "left-0";
  const directionShadow = props.reverse ? "40px" : "-40px";
  const shadowColor = props.shadow;
	return (
		<div className={`flex mt-[90.71px] justify-between space-x-[70px] md:flex-col md:justify-center sm:space-x-0 ${rowReverse}`}>
      <Image
          src={props.bg}
          alt='bg'
          width={240}
          height={470}
          quality={40}
          className={`absolute ${bgReverse} mt-12`}
        />
      <div className="flex items-center">
        <div className="flex flex-col flex-wrap max-w-[520px] md:min-h-[386px] sm:min-h-[350px] mr-[30px] sm:mr-0 ">
          <p className="font-bold text-primary text-2xl md:text-lg">
            {props.type} 
          </p>
          <p className="text-[42px] md:text-[32px] font-bold">
            {props.title}
          </p>
           <div className="list-disc text-lg" dangerouslySetInnerHTML={{ __html: props.content }}/>
           
          <div className="mt-[36px] sm:flex sm:justify-center">
            <button className="rounded-full bg-primary py-2 px-6 text-white">{props.button}</button>
          </div>
        </div>
      </div>
    

      <div className={`flex items-center`}>
        <Image
          src={props.image}
          alt='logo'
          width={570}
          height={403}
          quality={40}
          className={`rounded-[24px] ${shadowColor}`}
        />
      </div>

    </div>
	)	
}


export const BannerSliderTop = ({leftPosition, data}:{leftPosition: string, data: any}) => {
  return (
      <div style={{left : leftPosition}} className={`snap-center absolute w-full flex flex-col items-center max-w-[1280px] sm:w-[300px]`}>

        <h3 className=" flex flex-wrap text-4xl font-bold mb-[90px] mt-[10px] lg:mb-[30px] sm:text-2xl text-center">{data.header}</h3>

        <div className="flex lg:flex-col justify-between lg:items-center lg:justify-center">
        <div className="flex justify-center w-[400px] h-[300px] sm:w-[300px] sm:h-[200px] relative">
          <Image
            src={data.avatar}
            alt='logo'
            width={300}
            height={200}
            className="rounded-[24px] object-cover sm:object-fill"
            quality={60}
          />
        </div>

        <div className="flex w-full flex-col justify-center items-center mt-7 lg:mt-4">
          <div className="flex flex-col max-w-[630px] min-h-[386px] ">
            <p className="text-lg text-2xl text-center sm:text-base">
              {data.content}
            </p>
            <div className="flex justify-center my-[36px]">
              <div className="w-[78px] h-[3px] bg-primary items-center"></div>
            </div>
            
            <p className="text-2xl font-bold text-center">
              {data.author}
            </p>
            <p className="text-base text-center">
              {data.role}
            </p>
            
          </div>
        </div>
      </div>
    </div>
  )
}