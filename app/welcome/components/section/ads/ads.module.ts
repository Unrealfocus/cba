const cls = {
    container: `
      bg-white bg-center bg-cover flex flex-col justify-center bg-[url('/images/Ads.png')] w-full h-[366px]
       md:px-[10px]
    `,
    wrapper: `
      flex items-center justify-between max-w-full min-h-[70vh] py-[50px]
      md:items-end md:py-0 md:min-h-0
    `,
    block: `
      block pl-[20px] rounded-[15px] w-1/2
      md:p-[10px]
    `,
    title: `
      m-0 mb-[38px] md:text-[50px] spacing-0 font-bold text-black
      text-[24px] md:mb-[18px]
    `,
    caption: `
      m-0 md:text-[24px] font-[700] spacing-0 leading-[120%] text-black
      text-[16px]
    `,
    image: `
      md:w-[220px] md:h-[200px]
    `
  };
  
  export default cls;