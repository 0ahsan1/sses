import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "SSES - Solar Services"}
                </title>
            </Head>
        </>
    )
}

export default PageHead