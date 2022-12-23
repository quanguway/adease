import Head from 'next/head';
import Image from 'next/image';
import styles from './navbar.module.css';
import {navLinks, navTools} from './data';
import Link from 'next/link';
import React, { useState, useEffect  } from 'react';
import navbarAPI from "../../api/navbarAPI"
import {NavbarJson} from "../../json/navbarJson"

export default function Navbar({items}:{items:any}) {

  const [isNavSidebarOpen, setIsNavSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [itemsLink, setItemsLink] = useState<any[]>([]);
  const [itemsTool, setItemsTool] = useState<any[]>([]);

  const handleChangeDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);  
  }

   const handleChangeNavSidebar = () => {
    setIsNavSidebarOpen(!isNavSidebarOpen);
  }

  useEffect(() => {
    const collectionLink = items.link.data.map((data:any, index:any) => {
      return new NavbarJson(data).custom();
    });
    setItemsLink([...itemsLink, ...collectionLink]);

    const collectionTool = items.tool.data.map((data:any, index:any) => {
      return new NavbarJson(data).custom();
    });
    setItemsTool([...itemsTool, ...collectionTool]);

  },[]);

  useEffect(() => {
    if(!isNavSidebarOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [isNavSidebarOpen]);

  
  const NavIconItem = ({icon}:{icon:any}) => {
    return <Image src={icon.path} alt={icon.alt} width={23.49} height={24} className={"mt-1 sm:hidden " +styles.imgIcon}/>
  }

  const NavItem = ({data, onClick} : {data: any, onClick: any}) => {
    return (
      <li className="flex cursor-pointer sm:w-full sm:py-1 sm:px-3" onClick={onClick} >
        {typeof data.icon !== 'undefined' ? (<NavIconItem icon={data.icon}/>) : ''} 

        <a className={"block py-2 pl-3 pr-4 bg-blue-700 rounded font-semibold " + (data.active ?? false ? 'text-primary' : 'text-black') } href={data.path}>
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
      <ul className="flex items-center font-semibold text-base flex-row md:mt-0 md:text-sm md:text-medium sm:flex-col sm:items-start sm:text-xl sm:w-full sm:p-0">
        <NavItem data={data[0]} onClick={handleChangeDropdown}/>

        <div id="dropdownLang" style={{display: isDropdownOpen ? 'block' : 'none'}} className={`z-10 absolute mt-[170px] font-normal bg-white divide-y divide-gray-100 border-1 border-gray-100 rounded shadow w-44 sm:relative sm:w-full sm:border-0 sm:mt-0 sm:shadow-none sm:px-6`}>
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-400 sm:text-xl" aria-labelledby="dropdownLargeButton">
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
        <div className='hidden h-[0.5px] w-full bg-[#e5e7eb] sm:block'></div>

        <NavItem data={data[1]} onClick={""}/>

        <div className="flex justify-center sm:w-full sm:mt-5">
          <button className="rounded-full bg-primary py-[11px] px-6 text-white flex flex-nowrap" >Request a demo</button>
        </div>
      </ul>
    )
  }

	return (
		<nav className="px-2 sm:px-4 overflow-hidden">
      <div className="flex items-center min-h-[146px] justify-between md:justify-around sm:justify-between">
        <a href="#" className="flex items-center">
          <div className="w-[98px] h-[98px] md:w-[42px] md:h-[42px] relative">
            
            <Image
              src='/img/homepage/header/Frame.png'
              alt='logo'
              fill
            />
          </div>
        </a>
        <div className="flex w-auto sm:hidden items-center">
          <NavLink data={itemsLink}/>
          
          <NavTool data={navTools}/>
        </div>
        <div className="space-y-2 sm:block hidden cursor-pointer" onClick={handleChangeNavSidebar}>
          <div className="w-8 h-0.5 bg-primary"></div>
          <div className="w-8 h-0.5 bg-primary"></div>
          <div className="w-8 h-0.5 bg-primary"></div>
        </div>
        {/*<ModalNavSidebar/>*/}
        <a style={{display: isNavSidebarOpen ? 'block' : 'none'}} onClick={handleChangeNavSidebar} className="nav-sidebar absolute right-0 top-0 z-30 bg-gray-700 w-full h-full opacity-80">
           
        </a>
        <div style={{left: isNavSidebarOpen ? '0' : '-300px'}} className={`transition-all flex absolute flex-col nav-sidebar z-30 top-[0.1px] h-full w-[300px] bg-white drop-shadow-[-3px_3px_5px_gray]` }>
           
           <div className="flex justify-end mt-4 mr-4" onClick={handleChangeNavSidebar}>
             <svg width="24px" height="24px" viewBox="-1 -1 11 11" version="1.1"><path fill="#5f6368" stroke="#5f6368" stroke-linecap="round" stroke-width="1.5"d="m0 0 9,9 M0 9 9,0" /></svg>
           </div>
           <div className=''>
            <NavLink data={itemsLink}/>
            <div className='w-full h-[0.5px] bg-[#e5e7eb]'></div>
            <NavTool data={navLinks}/>
           </div>
            
        </div>
        
      </div>
    </nav>
  );
};