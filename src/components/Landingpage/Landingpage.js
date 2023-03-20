import React from 'react'
import Head from 'next/head'
import {Header} from '@/components/Landingpage/Header'
import {Hero} from '@/components/Landingpage/Hero'
import {PrimaryFeatures} from '@/components/Landingpage/PrimaryFeatures'
import {SecondaryFeatures} from '@/components/Landingpage/SecondaryFeatures'
// import CallToAction from '@/components/Landingpage/CallToAction'
import {Testimonials} from '@/components/Landingpage/Testimonials'
import Footer from '@/components/Landingpage/Footer'

const LandingPage = () => {
    return (
        <>
            <Head>
                <title>TaxPal - Accounting made simple for small businesses</title>
                <meta
                    name="description"
                    content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
                />
            </Head>
            <Header />
            <main className={'pt-20'}>
                <Hero />
                <PrimaryFeatures />
                <SecondaryFeatures />
                {/*<CallToAction />*/}
                <Testimonials />
            </main>
            <Footer />
        </>
    )
}

export default LandingPage
