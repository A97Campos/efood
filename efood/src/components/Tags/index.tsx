import { TagsContainer } from "./style"

type Props = {
    children: string | boolean
}

export const Tags = ({children}: Props) => (
    <TagsContainer>{children}</TagsContainer>
)