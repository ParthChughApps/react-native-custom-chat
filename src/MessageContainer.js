/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { View, Text } from 'react-native';
import { Avatar, Bubble, SystemMessage, Message, MessageText } from 'react-native-gifted-chat';

export const renderAvatar = ({ props, avatarImageStyle, avatarContainerStyle }) => (
  <Avatar
    {...props}
    containerStyle={avatarContainerStyle}
    imageStyle={avatarImageStyle}
  />
);

export const renderBubble = ({
  props, 
  bubbleContainerStyle,
  bubbleTimeTextStyle,
  bubbleWrapperStyle,
  bubbleBottomContainerStyle,
  bubbleTickStyle,
  bubbleContainerToNextStyle,
  bubbleContainerToPreviousStyle
}) => (
  <Bubble
    {...props}
    // renderTime={() => <Text>Time</Text>}
    // renderTicks={() => <Text>Ticks</Text>}
    containerStyle={bubbleContainerStyle}
    timeTextStyle={bubbleTimeTextStyle}
    wrapperStyle={{
      right: { backgroundColor: props?.currentMessage?.image && "transparent", ...(bubbleWrapperStyle?.left || {}) },
      left: { backgroundColor: props?.currentMessage?.image && "transparent", ...(bubbleWrapperStyle?.right || {}) },
    }}
    bottomContainerStyle={bubbleBottomContainerStyle}
    tickStyle={bubbleTickStyle}
    // usernameStyle={{ color: 'tomato', fontWeight: '100' }}
    containerToNextStyle={bubbleContainerToNextStyle}
    containerToPreviousStyle={bubbleContainerToPreviousStyle}
  />
);

export const renderSystemMessage = (props) => (
  <SystemMessage
    {...props}
  // containerStyle={{ backgroundColor: 'pink' }}
  // wrapperStyle={{ borderWidth: 10, borderColor: 'white' }}
  // textStyle={{ color: 'crimson', fontWeight: '900' }}
  />
);

export const renderMessage = ({props}) => (
  <Message
    {...props}
    // renderDay={() => <Text>Date</Text>}
    containerStyle={{
      // left: { backgroundColor: 'lime' },
      // right: { backgroundColor: 'black' },
    }}
  />
);

export const renderMessageText = ({
  props,
  renderMessageContainerStyle,
  renderMessageTextStyle,
  renderMessageCustomTextStyle,
  renderMessageLinkStyle
}) => (
  <MessageText
    {...props}
    containerStyle={renderMessageContainerStyle}
    textStyle={renderMessageTextStyle}
    customTextStyle={renderMessageCustomTextStyle}
    linkStyle={renderMessageLinkStyle}
  />
);

export const renderCustomView = ({ user }) => (
  <View>
    <Text>{JSON.stringify(user)}</Text>
  </View>
);