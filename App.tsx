import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Button, Right, Body, Icon, Text, Left } from 'native-base';

const App = () => {
    return (
        <Container>
            <Header>
                <Left style={styles.headerLeft} />
                <Body style={styles.headerBody}>
                    <Title>Финансовая подушка</Title>
                </Body>
                <Right style={styles.headerRight}>
                    <Button transparent>
                        <Icon type="FontAwesome" name="ellipsis-v" />
                    </Button>
                </Right>
            </Header>
            <Content>
                <Text>This is Content Section</Text>
                <Button>
                    <Text>Click Me!</Text>
                </Button>
            </Content>
        </Container>
    );
};

const styles = StyleSheet.create({
    headerLeft: {
        flex: 1,
    },
    headerBody: {
        flex: 2,
    },
    headerRight: {
        flex: 1,
    },
});

export default App;
