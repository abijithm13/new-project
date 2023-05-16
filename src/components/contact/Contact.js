// import Services from "../Home/Services";
import Footer from "../Layouts/Footer";

const Contact = () => {
  return (
    <>
      <main className="Contact">
        <div className="pg-header">
          <div className="bg-[#000000] w-full py-[25px]">
            <div className="max-w-[1240px] my-[20px] mx-auto text-red-600 text-center ">
              <div className="font-bold text-xl md:text-5xl mt-5 md:p-[24px]">
                Contact
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="py-[100px] px-10">
            <div className="max-w-[1240px] mx-auto md:grid grid-cols-4 gap-5">
              <div className="shadow-xl  h-[300px] my-5 hover:scale-110 bg-black text-white  hover:text-red-600 duration-200 rounded-lg">
                <h2 className="text-2xl font-bold text-center py-8">
                  Telephone
                </h2>
                <div className="text-center font-medium">
                  <p className="py-2 mx-8 mt-8">(410) 929-7087</p>
                </div>
              </div>
              <div className="shadow-xl  h-[300px] my-5 hover:scale-110 bg-black text-white  hover:text-red-600 duration-200 rounded-lg">
                <h2 className="text-2xl font-bold text-center py-8">
                  Mail Address
                </h2>
                <div className="text-center font-medium">
                  <p className="py-2 mx-8 mt-8">info@streamsss.com</p>
                </div>
              </div>
              <div className="shadow-xl  h-[300px] my-5 hover:scale-110  bg-black text-white  hover:text-red-600 duration-200 rounded-lg">
                <h2 className="text-2xl font-bold text-center py-8">
                  Location
                </h2>
                <div className="text-center font-medium">
                  <p className="py-2 mx-8">
                    USA : 9515, Deereco Road, Suite 306, Timonium MD-21093
                  </p>
                </div>
              </div>
              <div className="shadow-xl  h-[300px] my-5 hover:scale-110  bg-black text-white  hover:text-red-600 duration-200 rounded-lg">
                <h2 className="text-2xl font-bold text-center py-8">
                  Location
                </h2>
                <div className="text-center font-medium">
                  <p className="py-2 mx-8">
                    India : 60/7, Leo Towers 3rd Floor, Sathy Main Road,
                    Ganapathy, Coimbatore – 641006 Call Us : 0422-4348880
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
