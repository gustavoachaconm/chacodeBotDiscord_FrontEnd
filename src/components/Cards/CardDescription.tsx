import React from 'react'

interface DescriptionCard {
    title: string;
    description:string,
    position:'left' | 'right',
    colorCard:string,
    colorTitle:string,
    colorDescription:string
  }
const CardDescription: React.FC<DescriptionCard> = ({
    title,
    description,
    position,
    colorCard,
    colorTitle,
    colorDescription
}) => {
    const positions = {
        left: {
          card: 'rounded-r-[8rem]',
          text: 'text-left',
           content: 'text-start'
        },
        right: {
          card: 'rounded-l-[8rem]',
          text: 'text-right',
          content: 'text-end'
        }
      };
  return (

            <div className={` grid content-center justify-items-center ${positions[position].content} bg-[${colorCard}]  ${positions[position].card} `}>
                <div className="w-[70%] m-10 grid gap-8">
                    <h2 style={{color: colorTitle}} className={`font-black text-[32px] sm:text-[58px] leading-none text-[${colorTitle}] `}>{title}</h2>
                    <p  style={{color: colorDescription }} className={`font-semibold text-base text-[${colorDescription}] sm:text-[26px] ${positions[position].text} `}>
                        {description}
                    </p>
                </div>      
            </div>
   
  )
}

export default CardDescription