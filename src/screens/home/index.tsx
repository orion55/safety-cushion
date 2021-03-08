import React, { useEffect } from 'react';
import { Container, Content, Button, Text } from 'native-base';
import { HeaderMain } from '../../components/header';
import { useDispatch } from 'react-redux';
import { SetExpense } from '../../store/expenses/expenses.actions';

export const HomeScreen: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch({
                ...new SetExpense({
                    profileId: 0,
                    expenseIdx: 2,
                    name: 'tutu',
                    value: 1000,
                }),
            });
        };
    }, [dispatch]);

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
