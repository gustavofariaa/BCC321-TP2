import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.6.18/dist/css/uikit.min.css" />
      <Component {...pageProps} />
      <script src="https://cdn.jsdelivr.net/npm/uikit@3.6.18/dist/js/uikit.min.js"/>
      <script src="https://cdn.jsdelivr.net/npm/uikit@3.6.18/dist/js/uikit-icons.min.js"/>
    </>
  )
}

export default MyApp
