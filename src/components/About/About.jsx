import Footer from "../Layouts/Footer";

const About = () => {
    return (
      <>
      <main className="about">
        <div className="pg-header">
          <div className="container">
            <h1>About</h1>
          </div>
        </div>
        <div className="container content">
          <div className="row">
            <div className="col-lg-4">
              <h2>Why Choose Us.</h2>
              <p>Android phones get malware and viruses particularly from app stores. Apple’s App Store has fewer apps to offer than the Android phones’ app store, but the number of available apps is not the most important element of app stores. Apple is very careful with selecting which app developers gain access to the so-called Apple ecosystem – a network of devices, apps and developers. Getting apps that contain malware into the App Store is practically impossible.</p>
            </div>
            <div className="col-lg-4">
              <h2>The Apple ecosystem.</h2>
              <p>The devices work seamlessly and effortlessly together. You don’t need to download or install separate applications to link them together, it’s enough when you sign in to the devices with the same Apple ID. Photos, emails, notes and calendars can be shared to all the devices. You also don’t have to pay twice for apps, movies or books – they can be found on all your devices.</p>
            </div>
            <div className="col-lg-4">
              <h2>Ease of use.</h2>
              <p>Apple phones are known for their ease of use. Their usability comes from simple operating logic: all the apps are launched from the home screen. All the settings, for example, can be found under one menu. And even if you upgrade your iPhone to the newest model, the operating system still works the same way and taking it into use is easy.</p>
            </div>
          </div>
          
        </div>
      </main>
      <Footer />
      </>
    )
  }
  
  export default About;