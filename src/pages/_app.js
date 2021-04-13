import '../styles/globals.css'

function MyApp({Component, pageProps}) {
    return (
        <>
            <title>Store</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.6.18/dist/css/uikit.min.css"/>
            <Component {...pageProps} />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"/>
            <script src="https://cdn.jsdelivr.net/npm/uikit@3.6.18/dist/js/uikit.min.js"/>
            <script src="https://cdn.jsdelivr.net/npm/uikit@3.6.18/dist/js/uikit-icons.min.js"/>
        </>
    )
}

export default MyApp
