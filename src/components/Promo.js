import React from 'react'
import { Link } from 'react-scroll'


const Promo = (props) => {
  return (
    <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100 rounded-md bg-black text-white">
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src={props.image} alt="homes" className="h-80 dark:bg-gray-500"  />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<span className="text-xs uppercase dark:text-gray-400">Sign up, it's free</span>
				<h3 className="text-3xl font-bold">{props.title}</h3>
				<p className="my-6 dark:text-gray-400">{props.content}</p>
				<Link to={props.link} spy={true} smooth={true} offset={10} duration={500} type="button" className="self-start hover:text-gray-400 cursor-pointer">Sign Up</Link>
			</div>
		</div>
	</div>
</section>
  )
}

export default Promo