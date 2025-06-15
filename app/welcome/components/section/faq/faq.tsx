import React from "react";

import faqStyles from "./faq.module";
import FaqItem from "./faqItem";

export interface Faq {
    id:number;
    question: string;
    answer: string;  
  }

type Props = {
    data?: Faq[];
};




export default function Faq({ data }: Props) {


    return (
        <div className={faqStyles.container}>
            <div className="welcome-container">
                <section className={faqStyles.wrapper}>
                    <h1 className={faqStyles.title}>{"FAQS"}</h1>
                    <div className={faqStyles.accordion}>
                        {data?.map((item) => (
                            <FaqItem key={item.id} data={item} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}