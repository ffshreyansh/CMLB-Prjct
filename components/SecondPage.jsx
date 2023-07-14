import Appointment from "./Appointment"

const SecondPage = () => {
   
  return (
    <section
      className="h-screen text-left bg-white flex mt-20 font-satoshi flex-col-reverse sm:flex-row"
    >

      <div class="flex flex-col w-full sm:w-1/2 justify-between items-start h-screen p-10 sm:p-32">
        <div class="flex items-start mr-6 mb-6 sm:mb-0" >
          <svg class="w-20 h-20 mr-4 text-bluee" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <div>
            <h2 class="text-xl font-bold">Benefit 1</h2>
            <p class="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mollis lorem. In hac habitasse platea dictumst.</p>
          </div>
        </div>
        
        <div class="flex items-center mr-6 mb-6 sm:mb-0" >
          <svg class="w-20 h-20 mr-4 text-bluee" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
          <div>
            <h2 class="text-xl font-bold">Benefit 2</h2>
            <p class="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mollis lorem. In hac habitasse platea dictumst.</p>
          </div>
        </div>
        
        <div class="flex items-center">
          <svg class="w-20 h-20 mr-4 text-bluee" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 8v13H3V8M3 4v13h18V4"></path>
          </svg>
          <div>
            <h2 class="text-xl font-bold">Benefit 3</h2>
            <p class="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mollis lorem. In hac habitasse platea dictumst.</p>
          </div>
        </div>
      </div>
      <div>
      <Appointment/>
      </div>
</section>

  )
}

export default SecondPage