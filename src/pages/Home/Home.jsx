import react from "react";
import HomeHeader from "./homecomponents/HomeHeader";
import HomeOurStory from "./homecomponents/HomeOurStory";
import HomeProducts from "./homecomponents/HomeProducts";
import HomeCategories from "./homecomponents/HomeCategories";
import HomeProductsSwiper from "./homecomponents/HomeProductsSwiper";
import HomeDeliveryPartners from "./homecomponents/HomeDeliveryPartners";




const Home = () => {
  return (
    <div >
      <HomeHeader />
      <HomeOurStory/>


       <HomeProducts/>
      <HomeCategories/> 
      <HomeProductsSwiper/>
      <HomeDeliveryPartners/>
      

      
    </div>
  );
};

export default Home;
