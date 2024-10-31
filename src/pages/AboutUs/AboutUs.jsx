import React,{useRef} from 'react'
import AboutHeader from './aboutcomponents/AboutHeader'
import AboutStory from './aboutcomponents/AboutStory'
import AboutMission from './aboutcomponents/AboutMission'
import AboutCertification from './aboutcomponents/AboutCertification'
import AboutSwiper from './aboutcomponents/AboutSwiper'






const AboutUs = () => {

  const aboutStoryRef = useRef(null);
  return (
    <div className='pt-[10vh] lg:pt-[15vh]'>

<AboutHeader aboutStoryRef={aboutStoryRef}/>
<AboutStory aboutStoryRef={aboutStoryRef}/>
<AboutMission/>
<AboutCertification/>
<AboutSwiper/> 


    </div>
  )
}

export default AboutUs