import React from 'react'

const Info = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100" id="howitworks">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">How It Works</h2>
		<div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
			<div>
				<h3 className="font-semibold">A Better Way To Invest In Property</h3>
				<p className="mt-1 dark:text-gray-400">Real estate investment trusts (“REITs”) allow individuals to invest in a portfolio of properties, income-producing property especially. A REIT is a company that owns and typically operates income-producing real estate or related assets. These may include office buildings, shopping malls, apartments, hotels, resorts, self-storage facilities, warehouses, and mortgages or loans.</p>
			</div>
			<div>
				<h3 className="font-semibold">Why Invest in a REIT?</h3>
				<p className="mt-1 dark:text-gray-400">We provide a way for individuals to earn a share of the income produced through property ownership – without actually needing to buy and manage a property, especially if you can't afford it, this provides an opportunity to still earn on the incredible returns. So you might not enough money to buy a house but you can still earn competitive returns on your investments. Earning returns of over 9%.</p>
			</div>
			<div>
				<h3 className="font-semibold">Why Us?</h3>
				<p className="mt-1 dark:text-gray-400">Good question! We are highly renowned for our expert service and highly competitive returns. We offer safe and secure investments on highly secure assets. We do this using years of experience as well as the latest technology to track prices. We have a team of data experts monitoring the market in great detail.</p>
			</div>
			<div>
				<h3 className="font-semibold">How Can I Get Involved?</h3>
				<p className="mt-1 dark:text-gray-400">You can leave your details, providing information on your investment needs and requirements and one of our team will get in contact with you. We offer highly flexible products to suit you and also provide a low barrier of entry (invest as little as £5000) as well as exit from our property investments, whether you are looking to invest for as little as 1 year.</p>
			</div>
		</div>
	</div>
</section>
  )
}

export default Info