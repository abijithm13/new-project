import Footer from "../Layouts/Footer";

const About = () => {
    return (
      <>
      
      <main className="about">
        <div className="pg-header">
       <div className="bg-[#000000] w-full py-[15px]">
     <div className="max-w-[1240px] my-[20px] mx-auto text-red-600 text-center ">
     <div className="font-bold text-xl md:text-5xl mt-3 md:p-[24px]">
                About us
                </div>
     </div>
       </div>
        </div>
        <div className="container content">
          <div className="row">
            <div className="col-lg-4 ">
              <h2 className='text-2xl items-center justify-center '>Why Choose Us? </h2>
              <p className=''>Are you corporate recruiters still facing difficulties in sourcing skilled IT professionals? Here we pave the way to find the knowledgeable talents for your organizations. Stream solutions, a corporate HR & IT training company providing 360° training services and solutions for various technical and human resource positions like developers, software engineers, business analysts, QA managers, and much more.</p>
            </div>
            <div className="col-lg-4">
              <h2 className='text-2xl'>Vision:</h2>
              <p>For a persistent growth in pace with the dynamic world & technologies, thriving to provide the best corporate training solutions.</p>
            </div>
            <div className="col-lg-4">
              <h2 className='text-2xl'>Mission:</h2>
              <p>To strengthen and expand the business landscapes with the upliftment of customer value, mutual trust, and cooperation with our employees and clients enduring a long-term customer relationship.</p>
            </div>
          </div>
          
        </div>
      </main>
      <Footer />
      </>
    )
  }
  
  export default About;