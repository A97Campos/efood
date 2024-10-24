import { TagsContainer } from "./style"

type Props = {
    children: string
}

export const Tags = ({children}: Props) => (
    <TagsContainer>{children}</TagsContainer>
)