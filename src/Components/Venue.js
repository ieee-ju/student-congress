import React from 'react'
import {CiLocationOn, CiMail} from 'react-icons/ci'
import {MdCall} from 'react-icons/md'

function Venue() {
  return (
    <div className='text-center bg-white py-20'>
      <h1 className='text-3xl md:text-5xl mb-12 text-slate-800 font-roboto font-bold'>Venue</h1>
      <div className="flex flex-col md:flex-row">
        <div className='mx-auto w-80 sm:w-2/3 md:w-2/5 my-4'>
        <iframe class="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.156153637054!2d88.37120709999999!3d22.4983237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271236069f175%3A0xcee7537188e8fa9c!2sDr.%20Triguna%20Sen%20Auditorium!5e0!3m2!1sen!2sin!4v1660976428597!5m2!1sen!2sin"
          width="100%" height="300"  allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='rounded-3xl flex flex-col mx-auto w-80 sm:w-2/3 md:w-2/5 my-4'>
          <div className="bg-slate-700 text-2xl md:text-4xl text-white py-4">
           Dr. Triguna Sen Auditorium
          </div>
          <div className="px-6 flex flex-col border-slate-700 border-2">
            <div className="my-4 text-xl flex flex-row">
            <CiLocationOn size={40}/>
            <div className="flex flex-col">

              <b>Jadavpur University</b>188, Raja S.C. Mallick Rd, Kolkata 700032
            </div>
            </div>
            <div className="my-4 text-xl flex flex-row">
              <CiMail size={30}/>
              <a className='mx-4' href="mailto:jaduniv.ieee@gmail.com">jaduniv.ieee@gmail.com</a>
            </div>
            <div className="my-4 text-xl flex flex-row">
              <MdCall size={30}/>
              <a className='mx-4' href="tel:+919830192359">+91 98301 92359</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Venue