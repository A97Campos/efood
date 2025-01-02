import { ButtonContainer, ButtonLink } from "./style"

export type Props = {
    type: 'button' | 'link'
    title: string
    to?: string
    onClick?: () => void
    children: string
    variant?: 'rosaClaro' | 'rosaEscuro'
}

export const Button = ({type, children, title, onClick, to, variant}: Props) => {
    if (type === 'button') {
        <ButtonContainer type="button" title={title} onClick={onClick}>{children}</ButtonContainer>
    }
    return (
        <ButtonLink to={to as string} title={title} variant={variant} type="link">{children}</ButtonLink>
    )
}