

import React from 'react';
import { useRouter } from "next/router";
import callToActionStyles from './adsBanner.module';

export const AdsBanner = () => {
 
  return (
    <div className={callToActionStyles.container}>
      <h1 className={callToActionStyles.title}>
        Are you ready to <br /> 
        order with the best<br /> 
        deals?
      </h1>
      <div 
        
        className={callToActionStyles.button}
      >
        Place an Order
      </div>
    </div>
  );
};