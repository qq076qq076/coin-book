import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from './Icon';

type NavButtonProps = {
    title: string; // 按鈕文字
    icon: string; // 圖示名稱
    onPress: () => void; // 點擊事件
    isSelected?: boolean; // 是否被選中
}

const NavButton: React.FC<NavButtonProps> = ({ title, icon, onPress, isSelected }) => {
    return (
        <TouchableOpacity style={styles.navButton} onPress={onPress}>
            <Icon name={icon} size={20} color={isSelected ? styles.selectedIcon.color : styles.icon.color}></Icon>

            <Text style={styles.navText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    navButton: {
        alignItems: "center",
        marginVertical: 10,
        padding: 10,
        borderRadius: 10,
    },
    navText: {
        color: "#E4E4E7", // 文字顏色與 Header 一致
        fontSize: 12,
        marginTop: 5,
    },
    icon: {
        color: "#71717A", // 預設圖示為低調中性灰
    },
    selectedIcon: {
        color: "#3F79FF", // 選中時變為科技藍
    },
})

export default NavButton;