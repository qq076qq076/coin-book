import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type IconProps = {
  name: string;  // 圖示名稱
  size?: number; // 圖示大小
  color?: string; // 顏色
};


const Icon: React.FC<IconProps> = ({ name, size, color }) => {
  return <FontAwesome name={name} size={size} color={color} />;
}

export default Icon;