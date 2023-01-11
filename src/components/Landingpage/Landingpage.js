import React from 'react'
import Link from 'next/link'

const LandingPage = () => {
    return (
        <div className="bg-white h-screen flex flex-col">
            <header className="bg-primary p-4 flex justify-between items-center">
                <div className="text-xl font-bold text-white">[Company Name]</div>
                <div className="flex">
                    <Link href="/login" as="/login">
                        <a className="px-4 py-2 bg-white hover:bg-gray-100 text-primary font-bold rounded-full">Login</a>
                    </Link>
                    <Link href="/register" as="/register">
                        <a className="px-4 py-2 bg-white hover:bg-gray-100 text-primary font-bold rounded-full ml-4">Register</a>
                    </Link>
                </div>
            </header>
            <main className="flex-1 flex flex-col justify-center items-center">
                <div className="container mx-auto max-w-1440 grid gap-4">
                    <div className={'col-span-12 px-8'}>
                        <div className="text-4xl font-bold text-primary mb-6">Welcome to [Company Name]</div>
                        <p className="text-lg text-gray-500 mb-6">Welcome to [Company Name], where we specialize in
                            creating digital simulations of communication crises. Our team of experts has years of
                            experience in crisis management and understands the importance of being prepared for any
                            situation. With our simulations, you can train your team on how to effectively communicate
                            during a crisis and make better decisions under pressure. Whether it's a natural disaster, a
                            cyber attack, or a public relations nightmare, we have you covered. Our simulations are
                            tailored to your specific needs and can be conducted online or in person. Thank you for
                            choosing [Company Name] as your go-to resource for crisis communication training.
                        </p>
                    </div>
                </div>
            </main>
            <footer className="bg-primary p-4 text-center text-white">
                Copyright [Company Name] 2022
            </footer>
        </div>
    )
}

export default LandingPage
