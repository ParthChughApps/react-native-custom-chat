/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { View, Text } from 'react-native';
import { Avatar, Bubble, SystemMessage, Message, MessageText } from 'react-native-gifted-chat';

export const renderAvatar = (props) => (
  <Avatar
    {...props}
    containerStyle={{
      left: { borderWidth: 3, borderColor: 'red' },
      right: {}
    }}
    imageStyle={{
      left: { borderWidth: 3, borderColor: 'white' },
      right: { borderWidth: 3, borderColor: '#DEF2F1', backgroundColor: '#DEF2F1' }
    }}
  />
);

export const renderBubble = (props) => (
  <Bubble
    {...props}
    // renderTime={() => <Text>Time</Text>}
    // renderTicks={() => <Text>Ticks</Text>}
    containerStyle={{
      left: { borderColor: '#E5E5E5', borderWidth: 8 },
      right: {},
    }}
    timeTextStyle={{ 
      right: { color: 'gray',},
      left: { color: 'gray'},
    }}
    wrapperStyle={{
      right: { backgroundColor: props?.currentMessage?.image && "transparent" },
      left: { backgroundColor: props?.currentMessage?.image && "transparent" },
    }}
    bottomContainerStyle={{
      left: { backgroundColor: 'white', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 },
      right: { backgroundColor: '#DEF2F1', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 },
    }}
    tickStyle={{}}
    // usernameStyle={{ color: 'tomato', fontWeight: '100' }}
    containerToNextStyle={{
      left: { borderColor: '#DEF2F1', borderWidth: 4 },
      right: {},
    }}
    containerToPreviousStyle={{
      left: { borderColor: 'white', borderWidth: 4 },
      right: {},
    }}
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

export const renderMessage = (props) => (
  <Message
    {...props}
    // renderDay={() => <Text>Date</Text>}
    containerStyle={{
      // left: { backgroundColor: 'lime' },
      // right: { backgroundColor: 'black' },
    }}
  />
);

export const renderMessageText = (props) => (
  <MessageText
    {...props}
    containerStyle={{
      left: { backgroundColor: 'white' },
      right: { backgroundColor: '#DEF2F1' },
    }}
    textStyle={{
      left: { color: 'black' },
      right: { color: 'black' },
    }}
    linkStyle={{
      left: { color: 'darkblue' },
      right: { color: 'darkblue' },
    }}
    customTextStyle={{ fontSize: 13, lineHeight: 13 }}
  />
);

export const renderCustomView = ({ user }) => (
  <View>
    <Text>{JSON.stringify(user)}</Text>
  </View>
);