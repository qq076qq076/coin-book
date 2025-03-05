import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function Layout({ children }) {
    const insets = useSafeAreaInsets();
    const router = useRouter();
    const { width } = useWindowDimensions();
    const isMobile = width < 768; // 當螢幕寬度小於 768px，視為手機

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={[styles.header, { paddingTop: insets.top }]}>
                <Text style={styles.headerText}>Coin Book</Text>
            </View>

            {/* Web 版的 Sidebar */}
            {!isMobile && (
                <View style={styles.sidebar}>
                    <NavButton title="Home" icon="home" onPress={() => router.push("/")} />
                    <NavButton title="Profile" icon="user" onPress={() => router.push("/profile")} />
                    <NavButton title="Settings" icon="cog" onPress={() => router.push("/settings")} />
                </View>
            )}

            {/* 內容區塊 */}
            <View style={[styles.content, isMobile && { paddingBottom: 60 }]}>
                {children}
            </View>

            {/* Mobile 版的 Bottom Navigation */}
            {isMobile && (
                <View style={[styles.bottomNav, { paddingBottom: insets.bottom }]}>
                    <NavButton title="Home" icon="home" onPress={() => router.push("/")} />
                    <NavButton title="Profile" icon="user" onPress={() => router.push("/profile")} />
                    <NavButton title="Settings" icon="cog" onPress={() => router.push("/settings")} />
                </View>
            )}
        </View>
    );
}

// 通用的導航按鈕
function NavButton({ title, icon, onPress, isSelected }) {
    return (
        <TouchableOpacity style={styles.navButton} onPress={onPress}>
            <FontAwesome
                name={icon}
                size={20}
                style={isSelected ? styles.selectedIcon : styles.icon} // 動態切換顏色
            />
            <Text style={styles.navText}>{title}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#09090B", // 深黑色背景
    },
    header: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 60,
        backgroundColor: "#18181B", // Gluestack UI 深灰背景
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
    },
    headerText: {
        color: "#E4E4E7", // Gluestack UI 風格白灰色
        fontSize: 20,
        fontWeight: "bold",
    },
    sidebar: {
        width: 200,
        height: "100%",
        paddingTop: 60,
        backgroundColor: "#18181B", // 側邊欄背景
        paddingVertical: 20,
        alignItems: "center",
    },
    bottomNav: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        backgroundColor: "#18181B", // 底部導航欄背景
        justifyContent: "space-around",
        paddingVertical: 10,
    },
    content: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 20,
    },
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
});
