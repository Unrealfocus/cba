import React from "react";
import cls from "./ads.module";

const Ads = () => {

  return (
    <div className={cls.container}>
      <div className="welcome-container">
        <div data-aos="fade-right" className={cls.wrapper}>
          <div className={cls.block}>
            <h1 className={cls.title}>Hello, Fufu Lovers!</h1>
            <h3 className={cls.caption}>
              Get pounded yam flour delivered from a <br/>local grocery store today!
            </h3>
          </div>
          <div>
            <img 
              src="images/fufu.png" 
              width={420} 
              height={250}  
              alt="Brand logo dark" 
              className={cls.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
}


export default Ads;