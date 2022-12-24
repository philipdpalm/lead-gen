import React from 'react'

const Steps = () => {
  return (
    <section className="p-6 dark:bg-gray-800 dark:text-gray-100 bg-black text-white" id="steps">
	<div className="container mx-auto">
		<h2 className="text-5xl font-bold text-center dark:text-gray-50">What To Expect?</h2>
		<div className="grid gap-6 my-16 lg:grid-cols-3">
			<div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900">
				<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">1</div>
				<p className="text-2xl font-semibold">
					<b>Sign Up</b> Our team will contact you to discuss your needs in detail and find the investment to suit you
				</p>
			</div>
			<div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900">
				<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">2</div>
				<p className="text-2xl font-semibold">
					<b>Invest</b> Once you complete our KYC requirements and invest, you will be set up with a dedicated account manager
				</p>
			</div>
			<div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900">
				<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">3</div>
				<p className="text-2xl font-semibold">
					<b>Earn Returns</b> Earn returns of 9-12% depending on your investment, paid out monthly
				</p>
			</div>
		</div>
	</div>
</section>
  )
}

export default Steps