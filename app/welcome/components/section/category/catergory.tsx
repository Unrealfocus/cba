

const Category = () => {
    return (
        <div
            className="
          py-[60px] h-[300px] bg-cover bg-center flex flex-col justify-center bg-[url('/images/categories.png')] bg-white
          sm:py-[24px]
        "
        >
            <div
                className="
            flex items-center justify-between w-[1200px] mx-auto mb-[30px]
            sm:mb-[12px]
          "
            >

                <div className="
      flex gap-5  h-[100px] items-center bg-[#FCF3B8] rounded-[20.5px] 
      shadow-[0px_4px_15px_0px_rgba(217,217,217,0.25)] transition-all duration-400
      hover:bg-[var(--primary)]
      sm:h-[115px] sm:p-[5px]
    "> <img src="/nigeria.svg" alt="category icon" /></div>
                <div className="
      flex gap-5  h-[100px] items-center bg-[#FCF3B8] rounded-[20.5px] 
      shadow-[0px_4px_15px_0px_rgba(217,217,217,0.25)] transition-all duration-400
      hover:bg-[var(--primary)]
      sm:h-[115px] sm:p-[5px]
    " > <img src="/ghana.svg" alt="category icon" /></div>
                <div className="
      flex gap-5  h-[100px] items-center bg-[#FCF3B8] rounded-[20.5px] 
      shadow-[0px_4px_15px_0px_rgba(217,217,217,0.25)] transition-all duration-400
      hover:bg-[var(--primary)]
      sm:h-[115px] sm:p-[5px]
    " > <img src="/morocco.svg" alt="category icon" /></div>
                <div className="
      flex gap-5  h-[100px] items-center bg-[#FCF3B8] rounded-[20.5px] 
      shadow-[0px_4px_15px_0px_rgba(217,217,217,0.25)] transition-all duration-400
      hover:bg-[var(--primary)]
      sm:h-[115px] sm:p-[5px]
    " > <img src="/south-africa.svg" alt="category icon" /></div>
                <div className="
      flex gap-5  h-[100px] items-center bg-[#FCF3B8] rounded-[20.5px] 
      shadow-[0px_4px_15px_0px_rgba(217,217,217,0.25)] transition-all duration-400
      hover:bg-[var(--primary)]
      sm:h-[115px] sm:p-[5px]
    " > <img src="/tunisia.svg" alt="category icon" /></div>
                <div className="
      flex gap-5  h-[100px] items-center bg-[#FCF3B8] rounded-[20.5px] 
      shadow-[0px_4px_15px_0px_rgba(217,217,217,0.25)] transition-all duration-400
      hover:bg-[var(--primary)]
      sm:h-[115px] sm:p-[5px]
    " > <img src="/cameroon.svg" alt="category icon" /></div>
            </div>


        </div>

    )
}

export default Category