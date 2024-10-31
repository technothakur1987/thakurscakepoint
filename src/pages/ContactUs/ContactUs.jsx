import React,{useRef} from 'react';
import ContactHeader from './contactcomponents/ContactHeader';
import ContactNav from './contactcomponents/ContactNav';

const ContactUs = () => {
  const contactheaderref = useRef(null);
  return (
    <div className='pt-[10vh] lg:pt-[15vh] font-poppins'>
      <ContactHeader contactheaderref={contactheaderref}/>
      <ContactNav contactheaderref={contactheaderref} />
    </div>
  );
};

export default ContactUs;
