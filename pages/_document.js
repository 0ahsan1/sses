import { Head, Html, Main, NextScript } from 'next/document'
import Script from "next/script";

export default function Document() {
    return (
        <Html lang="en" id="#top">
            <Head />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-P7HZ4NJ0CF"></script>
            <Script id="google-tag-manager" strategy="beforeInteractive">
                {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','G-P7HZ4NJ0CF');
          `}
            </Script>
            <link rel="shortcut icon" href="/assets/img/favicon.png" />
            <link rel="preconnect" href="https://fonts.bunny.net" />
            <link href="https://fonts.bunny.net/css?family=dm-sans:400,400i,500,500i,700,700i|poppins:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i" rel="stylesheet" />
            <script
                src="https://analytics.ahrefs.com/analytics.js"
                data-key="eTOK4cHSGzspTwrw/gJOIg"
                async
            ></script>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
