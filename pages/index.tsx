import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar/navbar'
import BannerIntroTop from '../components/banner/bannerIntroTop'
import BannerIntroBottom from '../components/banner/bannerIntroBottom'
import BannerIntroList from '../components/banner/bannerIntroList'
import BannerEndTop from '../components/banner/bannerEndTop'
import BannerEndBot from '../components/banner/bannerEndBot'
import Footer from '../components/footer/footer'
import navbarAPI from "./../api/navbarAPI"
import bannerIntroAPI from "./../api/bannerIntroAPI"
import bannerSliderAPI from "./../api/bannerSliderAPI"
import {staticProps} from "../static/homepage"

export default function Home({data}:{data:any}) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="flex flex-col justify-center bg-cover bg-center bg-no-repeat bg-[url('/img/homepage/header/bg1.svg')]" >
          <div className="flex justify-center px-8">
            <div className="max-w-[1280px]">
              <Navbar items = {data.navbarItems}/>
              <BannerIntroTop/>
            </div>
          </div>
        </div>
        <div className="bg-[#FEF9F7B8] bg-cover bg-center w-full relative">
          <div className="flex justify-center px-8">
            <div className="max-w-[1280px]">
              <Image src="/img/homepage/bannerIntroBottom/pattern.png" alt="bg" width={340} height={592} 
          className="absolute right-0 mt-10"/>
              <BannerIntroBottom/>
            </div>
          </div>
        </div>
        <div className="flex justify-center px-6">
          <div className="max-w-[1280px] relative">
            <BannerIntroList items={data.bannerIntros}/>
          </div>
        </div>
        <div className="flex justify-center mt-20 w-full items-center min-h-[760px] relative bg-[url(/img/homepage/bannerEnd/bg-top.png)]">
          <Image src="/img/homepage/bannerEnd/quote.svg" className="absolute mr-[120px] mb-[40px]" alt="bg" width={120} height={120} />
          <div className="flex justify-center lg:px-0">
            <div className="w-[1280px] xl:w-[660px] sm:w-[300px] items-center">
              <BannerEndTop items={data.bannerSlider}/>    
            </div>
          </div>
        </div>
        <div className="w-full justify-center bg-[url(/img/homepage/bannerEnd/bg-bot.png)]">
          <div className="flex justify-center px-6">
            <div className="max-w-[1280px]">
              <BannerEndBot/>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      
    </div>
  )
}

export const getStaticProps = async () => {
  const navbarItemsLink = await navbarAPI.getItemsLink();
  const navbarItemsTool = await navbarAPI.getItemsTool();
  const bannerIntros = await bannerIntroAPI.getAll();
  const bannerSlider = await bannerSliderAPI.getAll();
  return {
    props: {
      data:{
        navbarItems:{
          link: navbarItemsLink,
          tool: navbarItemsTool,
        },
        bannerIntros: bannerIntros.data,
        bannerSlider: bannerSlider.data
      } ,
    }
  }
}
