import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const SignUp = () => {
	let [subLead, setSubLead]= React.useState(false)

	const form = useRef();
   function sendEmail(e){
        emailjs.sendForm('service_mky8poq', 'template_z0lq09l', form.current, 'Uowqrk_9I1fFToz7P')
          .then((result) => {
              console.log(result.text)
			  setSubLead(subLead = true)
          }, (error) => {
              console.log(error.text);
          });
      };


  return (
    <section className="p-6 dark:bg-gray-800 dark:text-gray-50" id="signup">
    <div className="container mx-auto">
		{/* <h2 className="text-5xl font-bold text-center dark:text-gray-50">Leave Your Details</h2> */}
        </div>
	<form ref={form} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
        <div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Submit Your Information</p>
				<p className="text-xs">Provide your details and we'll call you back</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sm">First name</label>
					<input id="firstname" name="firstname" type="text" placeholder="First name" required className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="lastname" className="text-sm">Last name</label>
					<input id="lastname" name="lastname" type="text" placeholder="Last name" required className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="email" className="text-sm">Email</label>
					<input id="email" name="email" type="email" placeholder="Email" required className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
                <div className="col-span-full sm:col-span-3">
					<label htmlFor="phone" className="text-sm">Phone</label>
					<input id="phone" name="phone" type="tel" placeholder="Phone" required className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
                <div className="col-span-full sm:col-span-3">
					<label htmlFor="amount" className="text-sm">Amount</label>
					<select id="amount" name="amount" placeholder="Amount" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required>
                    <option value="£5,000-£10,000">£5,000-£10,000</option>
                    <option value="£10,000-£25,000">£10,000-£25,000</option>
                    <option value="£25,000-£50,000">£25,000-£50,000</option>
                    <option value="£50,000-£100,000">£50,000-£100,000</option>
                    <option value="£100000+">£100,000+</option>
                    </select>
				</div>
                <div className="col-span-full sm:col-span-3">
					<label htmlFor="period" className="text-sm">Period</label>
					<select id="period" name="period" placeholder="Period" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required>
                    <option value="1year">1 Year</option>
                    <option value="2years">2 Years</option>
                    <option value="3years">3 Years</option>
                    <option value="4years+">4 Years</option>
                    </select>
				</div>
                <div className="col-span-full">
					<div className="flex items-center space-x-2">
						<button type="button" onClick={sendEmail} value="Send" className="px-4 py-2 border rounded-md border-gray-100 hover:bg-black hover:text-white">Submit</button>
					</div>
					{subLead && <div><p className="text-green-600">Thanks for submitting your details, You will be contacted you shortly</p></div>}
				</div>
			</div>
            
		</fieldset>
	</form>
</section>
  )
}

export default SignUp