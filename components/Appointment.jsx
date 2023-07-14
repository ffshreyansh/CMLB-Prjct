
const Appointment = () => {
 
    return (
        <section className=" overflow-hidden">
            <div className="w-96 h-fit text-center bg-green p-12 sm:absolute right-0 sm:right-56 z-30 tp">
            <h1 className="font-satoshi font-bold text-white text-3xl">Schedule an <br /> Appointment</h1>
            <p className="text-white font-md mt-4">Here, let visitors know what will happen when they complete your form.</p>
            <form action="" className="flex flex-col w-full justify-between relative gap-4 fm mt-4">
                <input type="text" name="fname" id="fname" placeholder="First Name*" />
                <input type="text" name="fname" id="fname" placeholder="Last Name*" />
                <input type="email" name="fname" id="fname" placeholder="Email*" />
                <input type="text" name="fname" id="fname" placeholder="Phone Number*" />
                <select class="bg-white border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-bluee">
                    <option value="" disabled selected>Select an option</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
                <button className="text-white bg-bluee fmbt">SCHEDULE NOW</button>
            </form>
            </div>
        </section>
    )
}

export default Appointment