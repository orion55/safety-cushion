import React from 'react';
import { Container, Content, Text } from 'native-base';
import { HeaderMain } from '../../components/header';
import { Nav } from '../../components/nav';

export const HomeScreen: React.FC = () => {
    return (
        <Container>
            <HeaderMain />
            <Content>
                <Nav />
                <Text>This is Content Section</Text>
            </Content>
        </Container>
    );
};
