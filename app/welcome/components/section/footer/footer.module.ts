export const footerStyles = {
    footer: `
      relative pt-[70px] bg-black z-[13] border-t border-[#FFD700]
      md:pt-[50px]
    `,
    main: `
      flex flex-col justify-between h-full
    `,
    logoWrapper: `
      w-[154px] mb-5 text-white
    `,
    flex: `
      flex gap-4
    `,
    item: `
      w-[135px] h-[44px]
    `,
    column: `
      p-0 m-0 list-none
    `,
    columnItem: `
      mb-3
    `,
    listItem: `
      text-[#FFD700] hover:underline
    `,
    bottom: `
      mt-[30px] border-t border-[#FFD700] py-[30px]
    `,
    social: `
      flex items-center gap-4
    `,
    socialItem: `
      block
      [&>svg]:fill-[#FFD700] [&>svg]:transition-colors [&>svg]:duration-200
      hover:[&>svg]:fill-primary
    `,
    text: `
      m-0 text-xs font-medium text-center text-secondary-text
    `,
    mutedLink: `
      block text-sm font-medium text-secondary-text hover:underline
    `
  };
  
  export default footerStyles;