import React, { useState } from "react";

import AddLineIcon from "remixicon-react/AddLineIcon";
import faqStyles from "./faq.module";
import type { Faq } from "./faq"; 



type Props = {
  data: Faq;
};

export default function FaqItem({ data }: Props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={faqStyles.item}>
      <div 
        className={faqStyles.header} 
        onClick={() => setOpen(!isOpen)}
      >
        <p className={faqStyles.label}>{data.question}</p>
        <AddLineIcon 
          className={`${faqStyles.icon} ${isOpen ? faqStyles.activeIcon : ""}`} 
        />
      </div>
      <div className={`${faqStyles.body} ${isOpen ? faqStyles.activeBody : ""}`}>
        {data.answer}
      </div>
    </div>
  );
}