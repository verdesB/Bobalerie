"use client"
import Link from "next/link";
import {Separator} from "./Separator";
import '../../styles/SectionHome.scss'
import { useEffect, useState, useRef} from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/app/ui/NavigationMenu";
import {handleSmoothScroll} from "next/dist/shared/lib/router/utils/handle-smooth-scroll";



interface InternalLinkProps {
    children: string;
    href: string;
    smooth: string; // Add this line
}

const Nav = () => {

    // console.log("test composant bfronty")
    // const handleClickBehiavor = async (e, href) => {
    //     e.preventDefault()
    //     window.scrollTo({ top: document.querySelector(href).offsetTop, behavior: 'smooth' })
    //     try {
    //         await router.push(href)
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <>
            {isMobile ?
                <div style={{width:'80%', display: 'flex',justifyContent: 'end',alignItems: 'center'}}>
                    <NavigationMenu >
                        <NavigationMenuList style={{width: '100%'}}>
                            <NavigationMenuItem style={{width:'13rem'}}>
                                <NavigationMenuTrigger style={{color: 'black', width: '100%',  justifyContent: 'end'}}>Menu</NavigationMenuTrigger>
                                <NavigationMenuContent className="menu" style={{ backgroundColor: 'rgba(143,143,143,0.32)', padding: '1rem', boxSizing: 'border-box'}}>
                                    <nav className={"sectionHome__nav"}>
                                        <ul className={"sectionHome__listLinks"}>
                                            {/*<li><Link href="#home"*/}
                                            {/*          onClick={(e) => handleClickBehiavor(e, '#home')}>Accueil</Link>*/}
                                            {/*</li>*/}
                                            <li><Link href="#home">Accueil</Link></li>
                                            <Separator orientation="horizontal" className={"w-24 m-auto bg-gray-500"}/>
                                            <li><Link href="#about" legacyBehavior={false} >A
                                                propos</Link></li>
                                            <Separator orientation="horizontal" className={"w-24 m-auto bg-gray-500"}/>
                                            <li><Link href="#Product">Produits</Link></li>
                                            <Separator orientation="horizontal" className={"w-24 m-auto bg-gray-500"}/>
                                            <li><Link href="#contact">Contact</Link></li>
                                        </ul>
                                    </nav>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                :
                <nav className={"sectionHome__nav"}>
                    <ul className={"sectionHome__listLinks"}>
                        <li><Link href="#home">Accueil</Link></li>
                        <Separator orientation="vertical" className={"h-8 m-auto bg-gray-500"}/>
                        <li><Link href="#about">A propos</Link></li>
                        <Separator orientation="vertical" className={"h-8 m-auto bg-gray-500"}/>
                        <li><Link href="#Product">Produits</Link></li>
                        <Separator orientation="vertical" className={"h-8 m-auto bg-gray-500"}/>
                        <li><Link href="#contact">Contact</Link></li>
                    </ul>
                </nav>
            }
        </>
    )
}
export default Nav