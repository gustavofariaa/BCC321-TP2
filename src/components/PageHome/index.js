import NavBar from '../NavBar'
import Hero from '../Hero'
import CardGrid from '../CardGrid'

export default function HomePage() {
    return (
        <>
            <NavBar />
            <div class="uk-container">
                <Hero />
                <CardGrid />
            </div>
        </>
    )
}