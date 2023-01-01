import React from 'react'
import Image from 'next/image'


const Partners = (props) => {
  return (
    <div className="bg-white" id="partners">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 mb-20">
      <h2 className="text-5xl text-black font-bold text-center dark:text-gray-50 mb-20">Who we work with?</h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            {/* <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" /> */}
            <Image src={props.logoOne} alt="Barratt" height={200} width={200} />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <Image src={props.logoTwo} alt="Hammerson" height={200} width={200}  />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <Image src={props.logoThree} alt="Bellway" height={200} width={200}  />

          </div>
          <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
          <Image src={props.logoFour} alt="Shaftesbury" height={200} width={200}  />
          </div>
          <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
          <Image src={props.logoFive} alt="Bellway" height={200} width={200}  />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners