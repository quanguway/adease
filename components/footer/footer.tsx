import Image from 'next/image'

export default function Footer() {
	return (
		<footer className="bg-gray-900 min-h-[528px] sm:px-5">
          <div className="flex justify-center px-6 min-h-[354px] sm:justify-start sm:px-0 sm:pt-7">
            <div className="max-w-[1280px] flex items-center justify-between space-x-[481px] xl:space-x-[200px] sm:justify-start sm:items-start md:space-x-[81px] sm:flex-col sm:space-x-0">
              <div className="flex flex-col space-y-[16px] sm:space-y-4">
                <Image
                  src='/img/homepage/header/Frame.png'
                  alt='logo'
                  width={98}
                  height={75.77}
                />
                <p className="text-white">Digital Marketing Made Easy</p>
                <p className="text-white text-[20px] font-semibold">Quick links</p>
                <div className="flex flex-row justify-between text-gray-300 space-x-[73px] sm:flex-col sm:space-x-0">
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
              <div className="flex flex-col min-h-full justify-end text-gray-300 space-y-[16px] sm:min-h-0 sm:mt-5">
                <p className="font-semibold text-[20px] text-white">Join our newsletter</p>
                <p className="">Subscribe to our newsletter to receive product updates</p>
                <div className="relative">
                  <button className="rounded-full bg-primary py-1 px-3 text-white font-semibold absolute right-0 mr-4 mt-1 sm:text-xs sm:mt-1.5">Send</button>
                  <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Your email address" type="text" name="email"/>
                  
                </div>
                <div className="flex flex-wrap justify-between items-center sm:justify-start sm:space-x-1">
                  <p className="">Connect with us</p>
                  <Image
                    src='/img/homepage/footer/facebook.png'
                    width={36}
                    height={36}
                    alt="SocialFa"
                  />
                  <Image
                    src='/img/homepage/footer/youtube.png'
                    width={36}
                    height={36}
                    alt="SocialYtb"
                  />
                  <Image
                    src='/img/homepage/footer/ins.png'
                    width={36}
                    height={36}
                    alt="SocialIns"
                  />
                  <Image
                    src='/img/homepage/footer/google.png'
                    width={36}
                    height={36}
                    alt="Socialgole"
                  />
                  <Image
                    src='/img/homepage/footer/linkedin.png'
                    width={36}
                    height={36}
                    alt="SocialLin"
                  />
                </div>
                
              </div>
            </div>

          </div>
          <div className="w-full h-0.5 bg-gray-300 mt-[88px] right-0 sm:mt-5"></div>

          <div className="flex min-h-[85px] justify-center items-center px-6 sm:px-0 sm:justify-start">
            <div className="max-w-[1280px] flex items-center justify-between space-x-[670px] xl:space-x-[400px] md:space-x-[290px] sm:space-x-[170px]">
              <p className="text-gray-300 sm:text-xs">Copyright © 2021 <span className="text-primary">AdEase</span>. Site by Uway</p>
    
              <div className="flex text-gray-300 sm:mb-4">
                <p className="mt-1 sm:text-xs">English</p>
                <Image src='/img/homepage/header/dropdown.svg' alt='bucket' width={24} height={24} className="mr-2"/>
                <button className="rounded-full border-2 border-primary bg-gray-900 py-0.5 px-4 text-primary sm:whitespace-nowrap sm:text-xs sm:flex">Sign in</button>
              </div>
            </div>
          </div>

      </footer>
	)
}