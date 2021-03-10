import React from 'react';
import { Container, Content, Button, Text } from 'native-base';
import { HeaderMain } from '../../components/header';

export const HomeScreen: React.FC = () => {
    return (
        <Container>
            <HeaderMain />
            <Content>
                <Text>This is Content Section</Text>
                <Button>
                    <Text>Click Me!</Text>
                </Button>
            </Content>
        </Container>
    );
};
