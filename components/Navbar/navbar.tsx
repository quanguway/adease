// @tsx-ignore
import Head from 'next/head';
import Image from 'next/image';
import styles from './navbar.module.css';
import {navLinks, navTools} from './data';
import Link from 'next/link';
import React, { useState, useEffect, useRef  } from 'react';



export default function Navbar() {
  const navSideBar = useRef();
  const [isNavSidebarOpen, setIsNavSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleChangeDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);  
  }

   const handleChangeNavSidebar = () => {
    setIsNavSidebarOpen(!isNavSidebarOpen);
    
  }

  

  // useEffect(() => {
  //   setIsNavSidebarOpen(isNavSidebarOpen);
  //   console.log(isNavSidebarOpen)
  //   if(!isNavSidebarOpen) {
  //     navSideBar.current.style.display = "none";
  //     console.log(navSideBar.current.style.display)
  //   } else {
  //     navSideBar.current.style.display = "fixed";
  //     console.log(navSideBar.current.style.display)
  //   }
  // }, [isNavSidebarOpen]);

  
const NavIconItem = ({icon}:{icon:any}) => {
  return typeof icon !== 'undefined' ? 
  (<Image src={icon.path} alt={icon.alt} width={23.49} height={24} className={"mt-1 sm:hidden " +styles.imgIcon}/> ) : (<></>)
}

const NavItem = ({data, onClick} : {data: any, onClick: any}) => {
  return (
    <li className="flex cursor-pointer sm:w-full sm:py-1">
      <NavIconItem icon={data.icon}/>

      <a onClick={onClick} className={"block py-2 pl-3 pr-4 bg-blue-700 rounded font-semibold " + (data.active ?? false ? 'text-primary' : 'text-black') } href={data.path}>
        {data.title} 
      </a>
      {data.dropdown ? (<Image src='/img/homepage/header/dropdown.svg' alt='bucket' width={24} height={24} className={"-ml-4 mt-1"}/>) : (<></>)}
    </li>
  )
}

const NavLink = ({data}:{data:any}) => {
  return (
    <ul className="flex items-center flex-row md:mt-0 md:text-sm md:font-medium sm:flex-col sm:items-start sm:text-xl sm:divide-y sm:w-full sm:divide-solid">
      {
        navLinks.map((data, index) => {
          return (
            <NavItem data={data} onClick={""}/>
          );
        })
      }
      
    </ul>
  )
}


const NavTool = ({data}:{data:any}) => {
  return (
    <ul className="flex items-center flex-row md:mt-0 md:text-sm md:font-medium sm:flex-col sm:items-start sm:text-xl sm:divide-y sm:w-full sm:divide-solid sm:p-0">
      <NavItem data={data[0]} onClick={handleChangeDropdown}/>

      <div id="dropdownLang" style={{display: isDropdownOpen ? 'block' : 'none'}} className={`z-10 absolute mt-[170px] font-normal bg-white divide-y divide-gray-100 border-1 border-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">VietNam</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Japane</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">China</a>
          </li>
        </ul>
    </div>
      <li className={'sm:hidden ' + styles.divideTool}></li>
      <NavItem data={data[1]} onClick={""}/>

        <button className="rounded-full bg-primary py-2 px-6 text-white flex flex-nowrap" >Request a demo</button>
    </ul>
  )
}


	return (
		<nav className="px-2 sm:px-4 py-2.5">
      <div className="flex items-center justify-between md: justify-around sm:justify-between">
        <a href="#" className="flex items-center">
          <div className="w-[42px] h-[42px] relative">
            
            <Image
              src='/img/homepage/header/Frame.png'
              alt='logo'
              fill
              // objectFit='cover'
              // width={80}
              // height={200}
              className=""
            />
          </div>
        </a>
        <div className="flex w-auto sm:hidden items-center">
          <NavLink data={navLinks}/>
          
          <NavTool data={navTools}/>
        </div>
        <div className="space-y-2 sm:block hidden cursor-pointer" onClick={handleChangeNavSidebar}>
          <div className="w-8 h-0.5 bg-primary"></div>
          <div className="w-8 h-0.5 bg-primary"></div>
          <div className="w-8 h-0.5 bg-primary"></div>
        </div>
        {/*<ModalNavSidebar/>*/}
        <div style={{display: isNavSidebarOpen ? 'block' : 'none'}} className={`flex fixed flex-col justy nav-sidebar absolute z-30 right-0 top-0.5 h-[1500px] w-[300px] bg-white drop-shadow-[-3px_3px_5px_gray]` }>
           <div className="text-primary text-5xl text-right mt-3 mr-4" onClick={handleChangeNavSidebar}>X</div>
           <div className=''>
            <NavLink data={navLinks}/>
            <div className='w-full h-[0.5px] bg-[#e5e7eb]'></div>
            <NavTool data={navTools}/>
           </div>
              
        </div>
      </div>
    </nav>
  );
};