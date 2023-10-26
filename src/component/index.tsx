import { ComponentProps } from "@/utils/type-component";

export const Section: React.FC<ComponentProps> = ({children, className, onClick}) => {
    const style = [className].join('')
    return(
        <div onClick={onClick} className={style}>{children}</div>
    )
}

export const H2: React.FC<ComponentProps> = ({children, className}) => {
    const style = [className].join('')
    return(
        <h2 className={style}>{children}</h2>
    )
}

export const Paragraf: React.FC<ComponentProps> = ({children, className}) => {
    const style = [className].join('')
    return(
        <p  className={style}>{children}</p>
    )
}

export const Button: React.FC<ComponentProps> = ({children, className}) => {
    const style = [className].join('')
    return(
        <button className={style}>{children}</button>
    )
}

 