import React from 'react';
import { StyleProp, TextInput, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Svg } from '../../../assets/svgs';
import { styles } from './style';

interface InputProps {
    placeholder: string;
    onChangeText: (text: string) => void;
    style?: StyleProp<ViewStyle>;
    value?: string;
    placeholderTextColor?: string;
    inputStyle?: StyleProp<ViewStyle>;
}

export default function Input({ placeholder, onChangeText, style, placeholderTextColor, value, inputStyle }: InputProps) {
    const handleClear = () => {
        onChangeText('');
    };

    return (
        <View style={[styles.inputContainer, style]}>
            <TextInput
                style={[styles.input, inputStyle]}
                placeholder={placeholder}
                onChangeText={onChangeText}
                placeholderTextColor={placeholderTextColor}
                value={value}
            />
            {value && value.length > 0 && (
                <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
                    <Svg name="close_circle_icon" />
                </TouchableOpacity>
            )}
        </View>
    );
}
