import { Text } from 'react-native';

interface Props {
  text: string;
  colors?: string;
}

export const GradientText: React.FC<Props> = ({ text, colors = 'from-purple-400 to-pink-600' }) => {
  return (
    <Text className={`bg-gradient-to-r ${colors} bg-clip-text text-3xl font-bold text-transparent`}>
      {text}
    </Text>
  );
};

export default GradientText;
