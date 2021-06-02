/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { InputToolbar, Actions, Composer, Send } from 'react-native-gifted-chat';

export const renderInputToolbar = (props) => (
  <InputToolbar
    {...props}
    containerStyle={{
      paddingTop: 6,
    }}
    primaryStyle={{ alignItems: 'center' }}
  />
);

export const renderActions = ({props, CameraIcon, cameraIconStyle}) => (
  <Actions
    {...props}
    containerStyle={cameraIconStyle}
    icon={() => (
      <CameraIcon />
    )}
    options={{
      'Choose From Library': () => {
        console.log('Choose From Library');
      },
      Cancel: () => {
        console.log('Cancel');
      },
    }}
    optionTintColor="#222B45"
  />
);

export const renderComposer = ({props, textInputStyle}) => (
  <Composer
    {...props}
    textInputStyle={textInputStyle}
  />
);

export const renderSend = ({props, AudioIcon, SendIcon, sendContainerStyle}) => (
  <Send
    {...props}
    disabled={!props.text}
    containerStyle={sendContainerStyle}
  >
    {!props.text && <AudioIcon />}
  </Send>
);