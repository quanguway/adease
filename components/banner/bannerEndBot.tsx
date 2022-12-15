import Image from 'next/image'
import {CheckBoxInfo} from '../patials/patials.tsx'
import {dataCheckBoxInfos} from '../patials/data.tsx'

export default function BannerEndBot (){
	return (
    <div className="flex flex-col justify-center w-full min-h-[486px]">
    	<h3 className="text-[42px] text-center font-bold mt-10 text-center">Start your 14-day free trial today</h3>
      <p className="text-2xl text-center">
        Discover how AdEase makes digital marketing easy. 
      </p>
      <div className="flex my-[16px] justify-center">
            {dataCheckBoxInfos.map((data, index) => {
              return (<CheckBoxInfo props={data}/>) 
            })}
            
          </div>
      <button className="rounded-full bg-primary py-2 px-4 text-white hover:bg-primarylight">Try now for free </button>
      
    </div>
	)
	
}