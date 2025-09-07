const navigation = {
	services: [
		{ name: 'Solar Water Pumping System', href: '#' },
		{ name: 'ON-GRID SOLAR SYSTEM', href: '#' },
		{ name: 'OFF-GRID SOLAR SYSTEM', href: '#' },
		{ name: 'SOLAR WATER HEATER SYSTEM', href: '#' },
		{ name: 'HYBRID SOLAR PV SYSTEM', href: '#' },
	],
	solutions: [
		{ name: 'All Projects', href: '#' },
		{ name: 'Karsaz, Karachi', href: '#' },
		{ name: 'Gulshan e Maymar', href: '#' },
		{ name: 'Lasbela University', href: '#' },
		{ name: 'KDA Scheme, Karachi', href: '#' },
	],
	social: [
		{
			name: 'Facebook', href: '#', icon: (props) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
				</svg>
			)
		},
		{
			name: 'YouTube', href: '#', icon: (props) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
				</svg>
			)
		}
	]
};

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white">
			<div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
				<div>
					<h3 className="text-xl font-bold mb-4 text-white">About Us</h3>
					<p className="text-sm leading-6 text-gray-300">
						“We are Solar Energy Experts with aim to provide most affordable Solar Energy Solution to our esteemed customers.
						We have done numerous projects in residential, industrial and agriculture sectors throughout Pakistan.”
					</p>
				</div>
				
				<div>
					<h3 className="text-xl font-bold mb-4 text-white">Our Services</h3>
					<ul className="space-y-2 text-sm text-gray-300">
						{navigation.services.map((item) => (
							<li key={item.name} className="hover:text-white">
								<a href={item.href}>{item.name}</a>
							</li>
						))}
					</ul>
				</div>
				
				<div>
					<h3 className="text-xl font-bold mb-4 text-white">Our Solutions</h3>
					<ul className="space-y-2 text-sm text-gray-300">
						{navigation.solutions.map((item) => (
							<li key={item.name} className="hover:text-white">
								<a href={item.href}>{item.name}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
			
			<div className="bg-orange-500 text-white py-6 px-4 flex justify-center items-center gap-4">
				{/*<div className="flex justify-center gap-6 py-6">*/}
				{/*	{navigation.social.map((item) => (*/}
				{/*		<a*/}
				{/*			key={item.name}*/}
				{/*			href={item.href}*/}
				{/*			className="text-gray-400 hover:text-white"*/}
				{/*		>*/}
				{/*			<span className="sr-only">{item.name}</span>*/}
				{/*			<item.icon className="w-6 h-6 text-white" aria-hidden="true" />*/}
				{/*		</a>*/}
				{/*	))}*/}
				{/*</div>*/}
				<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
					<path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.004 1.004 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.75 21 3 13.25 3 3.5A1 1 0 014 2.5H7.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
				</svg>
				<div>
					<p className="text-sm font-semibold">Phone No</p>
					<p className="text-xl font-bold">(+92) 301-820-7730</p>
					
				</div>
				
			</div>
			
	
			<div className="text-center text-sm text-gray-500 pb-6">&copy; 2024 Sustainable Solar Energy. All rights reserved.</div>
		</footer>
	);
}
