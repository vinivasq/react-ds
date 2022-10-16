import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot'; // torna a semantica do html flexivel podendo escolher qual tag a se utilizada no componente
import { clsx } from 'clsx';


export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
}

export function Text( { size = 'md', children, asChild }: TextProps ) {
    const Comp = asChild ? Slot : 'span';
    
    return(
        <Comp 
            className={clsx(
                "text-gray-100 font-sans",
                {
                    'text-xs': size == 'sm',
                    'text-sm': size == 'md',
                    'text-md': size == 'lg',
                }
            )}
        >
            {children}
        </Comp>
    )
}