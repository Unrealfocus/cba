const cls = {
    container: `
      flex flex-col justify-between gap-10 pt-16 pb-24 px-5
      bg-[url('/images/partnerSection.png')] bg-cover bg-[#fcf3b8] h-[728px]
    `,
    tab: `
      bg-white w-[300px] flex items-center h-[72px]
      justify-between rounded-full border border-transparent p-1
      self-center
    `,
    tabButton: `
      w-1/2 h-full flex items-center justify-center
      rounded-full border border-transparent cursor-pointer
      transition-all duration-300 ease-in-out
    `,
    activeTabButton: `bg-yellow-400 transition-all duration-300 ease-in-out`,
    inactiveTabButton: `bg-white transition-all duration-300 ease-in-out`,
    logoContainer: `flex self-center gap-5`,
    mobileContent: `flex justify-center items-center`,
    imageContainer: `text-[#2d2d2d] w-[200px] text-center`,
    imageTitle: `text-lg font-semibold`,
    imageDescription: `text-sm font-normal`,
    desktopContent: `flex justify-around`,
  };
  
  export default cls 
  
  