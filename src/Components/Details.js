import React from 'react'
import bg_image from '../Assets/img2.jpg'

function Details() {
  return (
    <>
    <div class="relative bg-gray-900">
      <div class="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
        <div class="h-full w-full xl:grid xl:grid-cols-2">
          <div class="h-full xl:relative xl:col-start-2">
            <img class="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0" src={bg_image} alt="People working on laptops"/>
            <div aria-hidden="true" class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"></div>
          </div>
        </div>
      </div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
        <div class="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h2 class="text-lg md:text-4xl font-semibold tracking-wide uppercase">
            <span class="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent font-roboto font-bold text-[2rem] sm:text-[3rem]">Event Details</span>
          </h2>
          <p className='text-white text-md md:text-2xl my-20'>
          IEEE Kolkata Section is organizing a day-long event to foster collaboration and engagement among student branches, promoting knowledge exchange and showcasing activities undertaken throughout the year. Emphasizing technological advancement for societal betterment, IEEE encourages young individuals to participate in various student branches. The event aims to facilitate interaction between student branch members and IEEE Kolkata Section office-bearers, addressing concerns and discussing the benefits of IEEE. It features a coding competition, with jury members selecting the best student branch based on activities conducted under IEEE Kolkata Section. The winning branch will receive recognition. The event underscores IEEE's commitment to empowering and recognizing the contributions of student branches, creating a platform for students to connect, learn, and showcase their achievements.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Details