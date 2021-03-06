export default function Hero() {
    return (
        <>
            <div className="uk-cover-container uk-margin-medium-bottom">
                <video src="https://assets.mixkit.co/videos/preview/mixkit-hand-selecting-through-clothes-23327-large.mp4" autoPlay loop muted playsInline uk-cover/>
            </div>

            <article className="uk-article uk-margin-medium-bottom">
                <h1 className="uk-article-title"><a className="uk-link-reset" href="">Store</a></h1>
                <p className="uk-text-lead">Lançamos coleções anualmente, sempre pensando no seu estilo e conforto. A Store busca se reinventar a todo momento, sempre desenvolvendo coleções em total sincronia com as tendências da mundo moderno, sem perder a identidade e mantendo a tradição.</p>
            </article>
        </>
    )
}