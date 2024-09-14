import React from "react";

export function CardGradientUI({ children }: { children: React.ReactNode }) {
    return (<div className='relative h-auto'>
        {children}
        <div className="gradientBack -z-50 h-4/5 aspect-square top-0 left-0 right-0 bottom-0 m-auto"></div>
    </div>
    )
}