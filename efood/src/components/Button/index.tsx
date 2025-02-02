import { ButtonContainer, ButtonLink } from "./style"

export type Props = {
    type: 'button' | 'link' | 'submit'
    title: string
    to?: string
    onClick?: () => void
    children: string
    variant?: 'rosaClaro' | 'rosaEscuro'
    disabled?: boolean
}

export const Button = ({type, children, title, onClick, to, variant, disabled}: Props) => {
    if (type === 'button' || type === 'submit') {
        <ButtonContainer 
            type="button" 
            title={title} 
            onClick={onClick}
            disabled={disabled}>
                {children}
        </ButtonContainer>
    }
    return (
        <ButtonLink to={to as string} title={title} variant={variant} type="link">{children}</ButtonLink>
    )
}