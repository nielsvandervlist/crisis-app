import React from 'react'
import Link from 'next/link'
import Container from '@/components/Landingpage/Container'
import Button from '@/components/Button'

export function Header() {
	return (
		<header className="fixed left-0 right-0 top-0 z-20 bg-white py-10" data-cy={'header'}>
			<Container>
				<nav className="relative z-50 flex justify-between">
					<div className="flex items-center md:gap-x-12">
						<Link href="#" aria-label="Home">
							Logo
						</Link>
						<div className="hidden md:flex md:gap-x-6">
							<Link href="/pricing">Pricing</Link>
						</div>
					</div>
					<div className="flex items-center gap-x-5 md:gap-x-8">
						<div className="hidden md:block">
							<Link href={`${process.env.NEXT_PUBLIC_APP_URL}/login`}>Sign in</Link>
						</div>
						<Button href={`${process.env.NEXT_PUBLIC_APP_URL}/register`} color="blue">
							<span>
								Get started <span className="hidden lg:inline">today</span>
							</span>
						</Button>
						<div className="-mr-1 md:hidden">
                            {/*Mobile menu*/}
						</div>
					</div>
				</nav>
			</Container>
		</header>
	)
}
