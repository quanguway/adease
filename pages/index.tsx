import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar/navbar'
import BannerIntroTop from '../components/banner/bannerIntroTop'
import BannerIntroBottom from '../components/banner/bannerIntroBottom'
import BannerIntroList from '../components/banner/bannerIntroList'
// import BannerEndTop from '../components/banner/BannerEndTop'
import BannerEndBot from '../components/banner/bannerEndBot'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="flex flex-col justify-center bg-cover bg-center bg-no-repeat bg-[url('/img/homepage/header/bg1.svg')]" >
          <div className="flex justify-center px-6">
            <div className="max-w-[1280px]">
              <Navbar/>
              <BannerIntroTop/>
            </div>
          </div>
        </div>
        <div className="bg-[#FEF9F7B8] bg-cover bg-center w-full relative">
          
          <div className="flex justify-center p-6">
            <div className="max-w-[1280px]">
              <Image src="/img/homepage/bannerIntroBottom/pattern.png" alt="bg" width={340} height={592} 
          className="absolute right-0 mt-10"/>
              <BannerIntroBottom/>
            </div>
          </div>
        </div>
        <div className="flex justify-center px-6">
            <div className="max-w-[1280px] relative">
            <BannerIntroList />
          </div>
        </div>
       {/* <div className="mt-20 w-full items-center min-h-[760px] bg-[url(/img/homepage/bannerEnd/bg-top.png)]">
          <div className="flex justify-center  px-6 relative py-5">
            <div className="max-w-[1280px] items-center">
              <BannerEndTop/>
            </div>
          </div>
        </div>*/}
        <div className="w-full justify-center bg-[url(/img/homepage/bannerEnd/bg-bot.png)]">
          <div className="flex justify-center px-6">
            <div className="max-w-[1280px]">
              <BannerEndBot/>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 min-h-[528px]">
          <div className="flex justify-center px-6 min-h-[354px]">
            <div className="max-w-[1280px] flex items-center justify-between space-x-[481px] md:space-x-[81px]">
              <div className="flex flex-col space-y-[16px]">
                <Image
                  src='/img/homepage/header/Frame.png'
                  alt='logo'
                  width={98}
                  height={75.77}
                  className={styles.imgFrame}
                />
                <p className="text-white">Digital Marketing Made Easy</p>
                <p className="text-white text-[20px] font-semibold">Quick links</p>
                <div className="flex flex-row justify-between text-gray-300 space-x-[73px]">
                  <div className="flex flex-col">
                    <a href="" className="text-primary">Home</a>
                    <a href="">Features</a>
                    <a href="">Product</a>
                  </div>
                  <div className="flex flex-col">
                    <a href="">Pricing</a>
                    <a href="">Contact us</a>  
                    <a href="">Booking</a>
                  </div>
                </div>

              </div>
              <div className="flex flex-col min-h-full justify-end text-gray-300 space-y-[16px]">
                <p className="font-semibold text-[20px] text-white">Join our newsletter</p>
                <p className="">Subscribe to our newsletter to receive product updates</p>
                <div className="relative">
                  <button className="rounded-full bg-primary py-1 px-3 text-white font-semibold absolute right-0 mr-4 mt-1">Send</button>
                  <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Your email address" type="text" name="email"/>
                  
                </div>
                <div className="flex sm:flex-col justify-between items-center">
                  <p className="">Connect with us</p>
                  <Image
                    src='/img/homepage/footer/facebook.png'
                    width={36}
                    height={36}
                    alt="SocialFa"
                    className={styles.imgFrame}
                  />
                  <Image
                    src='/img/homepage/footer/youtube.png'
                    width={36}
                    height={36}
                    alt="SocialYtb"
                    className={styles.imgFrame}
                  />
                  <Image
                    src='/img/homepage/footer/ins.png'
                    width={36}
                    height={36}
                    alt="SocialIns"
                    className={styles.imgFrame}
                  />
                  <Image
                    src='/img/homepage/footer/google.png'
                    width={36}
                    height={36}
                    alt="Socialgole"
                    className={styles.imgFrame}
                  />
                  <Image
                    src='/img/homepage/footer/linkedin.png'
                    width={36}
                    height={36}
                    alt="SocialLin"
                    className={styles.imgFrame}
                  />
                </div>
                
              </div>
            </div>

          </div>
          <div className="w-full h-0.5 bg-gray-300 mt-[88px]"></div>

          <div className="flex min-h-[85px] justify-center items-center px-6">
            <div className="max-w-[1280px] flex items-center justify-between space-x-[610px] md:space-x-[210px]">
              <p className="text-gray-300">Copyright © 2021 <span className="text-primary">AdEase</span>. Site by Uway</p>
              <div className="flex text-gray-300 md:flex-col">
                <p className="mt-1">English</p>
                <Image src='/img/homepage/header/dropdown.svg' alt='bucket' width={24} height={24} className="mr-2"/>
                <button className="rounded-full border-2 border-primary bg-gray-900 py-0.5 px-4 text-primary">Sign in</button>
              </div>
            </div>
          </div>

      </footer>
    </div>
  )
}
