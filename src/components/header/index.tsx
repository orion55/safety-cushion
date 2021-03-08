import React from 'react';
import { Body, Button, Icon, Left, Right, Title, Header } from 'native-base';
import { StyleSheet } from 'react-native';

export const HeaderMain: React.FC = () => {
    return (
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
