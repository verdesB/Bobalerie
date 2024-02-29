
import Image from "next/image";
import '../styles/SectionHome.scss'
import Nav from "./ui/Nav";
import SectionAbout from "@/app/SectionAbout";



export default function Home() {

    console.log("test composant back")
    return (
        <div id="home" className={"sectionHome"} >
            <header  className={"sectionHome__header"}>
                <div className={'sectionHome__boxLogo'}>
                    <Image src="/lb.svg" alt="logo" width={50} height={50} />
                </div>
                <Nav/>
            </header>
            <main>
                <section className={'sectionHome__content'}>
                    <div className={'sectionHome__containerLeft'}>
                        <div className={'sectionHome__boxImage'}>
                            <Image className={'sectionHome__image'} src="/la_bobalerie.svg" alt="La Bobalerie" width={0}
                                   height={0}/>
                        </div>
                        <div className={'sectionHome__boxTypo'}>
                            <h1 className={'sectionHome__title'}>La Bobalerie</h1>
                            <p className={'sectionHome__text'}>C'est le début de la bêtise ...</p>
                        </div>

                    </div>
                    <div className={'sectionHome__containerRight'}>
                        <Image src="/Pull1.png" alt="" width={500} height={500}/>
                    </div>
                </section>
                {/*<SectionAbout />*/}
                <section id="about" style={{height: '100vh'}}>

                </section>
            </main>
        </div>
    );
}
