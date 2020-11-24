import ElementsSection from './ElementsSection.jsx'
import noticias from '../data/noticias.js'

const noti = noticias();

export default function SectionNoticias() {
    
    return (
        <section>
            <ElementsSection noticias={noti}></ElementsSection>
        </section>
    )
}