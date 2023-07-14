import Footer from "./Footer"
import SecondLastPage from "./SecondLastPage"

const ThirdPage = () => {
  return (
    <section>
    <div>
   <div className="flex flex-col text-center p-10 sm:p-40 pb-0 font-satoshi bg-lblu animated-div">
        <div>
            <h1 className="mb-4 text-2xl sm:text-6xl text-green font-bold">Show visitors what <br /> they're signing up for</h1>
            <p className="text-sm sm:text-lg w-full sm:w-1/2 mx-auto font-medium text-green">Include a video or photo from one of your sessions to help people understand your service (or just to hype ‘em up).</p>
        </div>
        <div className="mt-8">
            {/* <video autoPlay loop  controls src="https://player.vimeo.com/video/428421418"></video> */}
            <iframe className="w-full relative z-20" width="900" height="506" src="https://www.youtube.com/embed/SPgixVcfiCE" title="1000HP Bugatti Veyron | Forza Horizon 5 | Logitech g29 gameplay" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div> 
        
   </div>
   <SecondLastPage/>
  
   </div>
   
   </section>
  )
}

export default ThirdPage