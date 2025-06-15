import React from "react";
import cls from "./blog.module";
import Link from "next/link";




const Blog= () => {

  
    return (
      <div className={cls.container}>
        <div className="welcome-container">
          <div className={cls.wrapper}>
            <div className={cls.header} data-aos="fade-up">
              <h3 className={cls.heading}>{"Latest Blog"}</h3>
              <Link href="/blog" className={cls.link}>
                <span className={cls.text}>{"See more"}</span>
              </Link>
            </div>
            <div className="flex gap-4 overflow-x-scroll">
              <div>
                
                <div  className={cls.imgWrapper}>
                  <img
                    src={"https://i.pinimg.com/originals/8e/3a/de/8e3ade7632d9b8f07a66cc30c414333c.jpg"}
                    alt={ "Blog post"}
                    className="object-contain"
                  />
                 <div className={cls.desc}>
                   <div
                    className={cls.bod}
                    dangerouslySetInnerHTML={{
                      __html: "Default Blog Title"
                    }}
                  />
                  </div>
                </div>
                
               
              </div>
              <div>
                <div  className={cls.imgWrapper}>
                  <img
                    src={"https://i.pinimg.com/originals/d5/8c/28/d58c286242a3ed7b5df991f669807b1c.jpg"}
                    alt={ "Blog post"}
                    className="object-cover"
                  />
                 <div className={cls.desc}>
                   <div
                    className={cls.bod}
                    dangerouslySetInnerHTML={{
                      __html: "Default Blog Title"
                    }}
                  />
                  </div>
                </div> 
              </div>
              <div>
                <div  className={cls.imgWrapper}>
                  <img
                    src={"https://i.pinimg.com/originals/d5/8c/28/d58c286242a3ed7b5df991f669807b1c.jpg"}
                    alt={ "Blog post"}
                    className="object-cover"
                  />
                 <div className={cls.desc}>
                   <div
                    className={cls.bod}
                    dangerouslySetInnerHTML={{
                      __html: "Default Blog Title"
                    }}
                  />
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    );

}

export default Blog;