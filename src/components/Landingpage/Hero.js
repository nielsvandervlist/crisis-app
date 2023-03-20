import Image from 'next/image'
import Button from '@/components/Button'
import Container from '@/components/Landingpage/Container'

export function Hero() {
	return (
		<Container className="pt-20 pb-16 text-center lg:pt-32">
			<h1 className="text-xxxl mx-auto max-w-4xl font-medium tracking-tight">
				Managing your
				<span className="text-primary-400 relative"> database </span>
				made simple
			</h1>
			<p className="text-md mx-auto mt-6 max-w-2xl font-light leading-loose tracking-tight text-slate-700">
				Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and
				hope you don’t get audited.
			</p>
			<div className="mt-10 flex justify-center gap-x-6">
				<Button
					className={'flex items-center'}
					href={`${process.env.NEXT_PUBLIC_APP_URL}/register`}
				>
					Get 6 months free
				</Button>
				<Button
					className={'flex items-center'}
					href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
					variant="secondary"
				>
					<svg
						aria-hidden="true"
						className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
					>
						<path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
					</svg>
					<span className="ml-3">Watch video</span>
				</Button>
			</div>
		</Container>
	)
}
