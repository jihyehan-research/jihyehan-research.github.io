"use client";
import {useEffect} from 'react';
import {usePathname} from 'next/navigation';
import {DropdownMenu,DropdownMenuTrigger,DropdownMenuContent,DropdownMenuItem} from '@/components/ui/dropdown-menu';
const pages=[['Home','/'],['Research','/research/'],['Publications','/publications/'],['Media Coverage','/media/'],['CV','/Jihye-Han-CV.pdf']];
export default function SiteHeader(){
const path=usePathname();
useEffect(()=>{if(window.location.pathname==='/'){const route:Record<string,string>={'#research':'/research/','#publications':'/publications/','#media':'/media/','#updates':'/media/','#cv':'/Jihye-Han-CV.pdf'};const next=route[window.location.hash];if(next)window.location.replace(next);}},[]);
return <header className={path === "/" ? "home-header" : undefined}>{path !== "/" && <a className="wordmark" href="/"><span className="header-name">Jihye Han</span>, <span>PharmD, MPH</span></a>}<DropdownMenu><DropdownMenuTrigger className="menu-trigger" aria-label="Open navigation menu"><span className="hamburger" aria-hidden="true"><i/><i/><i/></span></DropdownMenuTrigger><DropdownMenuContent className="site-menu" align="end" sideOffset={12}>{pages.map(([label,href])=><DropdownMenuItem key={href} className="site-menu-item" render={<a href={href} aria-current={path?.replace(/\/$/,'')===href.replace(/\/$/,'')?'page':undefined}/>}>{label}</DropdownMenuItem>)}</DropdownMenuContent></DropdownMenu></header>;
}
