import React from 'react';
import { Button } from 'react-native';

export const MyButton = (props) => {
  return (
    <Button
      title={props.text}
      onPress={props.onPress}
      color={props.cor}
      disabled={props.disabled}
    />
  );
}
export default MyButton;
