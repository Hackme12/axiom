import { KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard } from 'react-native';

export interface keyBoardAvoidingProps {
  Component: React.FC;
}

const KeyboardAvoidingViewComp: React.FC<keyBoardAvoidingProps> = ({ Component }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Component />
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingViewComp;
