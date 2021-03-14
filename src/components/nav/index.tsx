import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/root.reducer';
import { StyleSheet } from 'react-native';
import { View, Button, Text, Icon } from 'native-base';
import { Colors } from '../../styles/colors';
import { SetProfileId } from '../../store/profiles/profiles.action';

export const Nav: React.FC = () => {
    const dispatch = useDispatch();
    const profiles = useSelector((state: RootState) => state.profiles.profilesById);
    const selectedProfileId = useSelector((state: RootState) => state.profiles.selectedProfileId);

    const onPress = (id: number) => () => {
        dispatch({ ...new SetProfileId(id) });
    };

    return (
        <View style={styles.nav}>
            {profiles.map((item, idx) => {
                return (
                    <Button
                        bordered
                        style={[styles.nav__btn, selectedProfileId === idx ? styles.nav__btn__selected : {}]}
                        onPress={onPress(item.id)}
                        key={item.id}>
                        <View style={styles.nav__wrap}>
                            {!!item.icon && (
                                <Icon
                                    type="FontAwesome5"
                                    name={item.icon}
                                    style={[
                                        styles.nav__icon,
                                        selectedProfileId === idx ? styles.nav__icon__selected : {},
                                    ]}
                                />
                            )}
                            {!!item.name && (
                                <Text
                                    style={[
                                        styles.nav__text,
                                        selectedProfileId === idx ? styles.nav__text__selected : {},
                                    ]}>
                                    {item.name}
                                </Text>
                            )}
                        </View>
                    </Button>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    nav: {
        flexDirection: 'row',
    },
    nav__btn: {
        width: '25%',
        flex: 1,
    },
    nav__btn__selected: {
        backgroundColor: Colors.primary,
        borderColor: 'white',
        borderWidth: 1,
    },
    nav__wrap: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    nav__text: {
        paddingLeft: 10,
        color: Colors.primary,
    },
    nav__text__selected: {
        color: 'white',
    },
    nav__icon: {
        fontSize: 20,
        color: Colors.primary,
    },
    nav__icon__selected: {
        color: 'white',
    },
});
