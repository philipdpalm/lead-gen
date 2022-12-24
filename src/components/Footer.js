import React from 'react'

const Footer = () => {
	const year = new Date().getFullYear();
  return (
    <footer className="py-6 bg-black text-white" id="contact">
	<div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
		<div className="grid grid-cols-12">
			<div className="pb-6 col-span-full md:pb-0 md:col-span-6">
				<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
					<div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-900">
							<path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
						</svg>
					</div>
					<span className="self-center text-2xl font-semibold">Property Investment Company</span>
				</a>
			</div>
			<div className="col-span-6 text-center md:text-left md:col-span-3">
				<p className="pb-1 text-lg font-medium">Address</p>
				<ul>
					<li>
						<a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">20 London Street</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">London</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">WC2A 0AA</a>
					</li>
				</ul>
			</div>
			<div className="col-span-6 text-center md:text-left md:col-span-3">
				<p className="pb-1 text-lg font-medium">Contact</p>
				<ul>
					<li>
						<a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">Email: info@propertyic.com</a>
					</li>
                    <li>
						<a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">Phone: +44(0)208 000 0000</a>
					</li>
				</ul>
			</div>
		</div>
		<div className="grid justify-center pt-6 lg:justify-between">
			<div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
				<span>©{year} Property Investment Company Limited</span>
                <span>All rights reserved</span>
			</div>
			
		</div>
	</div>
</footer>
  )
}

export default Footer