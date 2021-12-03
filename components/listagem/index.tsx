import React from "react";

import {
    Container,
    Wrapper,
    Title
} from './styles'

interface ApiData {
    name: string
}

export interface Props {
    data: ApiData
}

export function PostAPI({ data } : Props){
    return (
        <Container>
            <Wrapper>
                <Title>{data.name}</Title>
            </Wrapper>
        </Container>
    )
}