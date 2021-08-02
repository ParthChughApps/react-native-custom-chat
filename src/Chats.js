import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import initialMessages from './messages';
import { renderInputToolbar, renderActions, renderComposer, renderSend } from './InputToolbar';
import {
  renderAvatar,
  renderBubble,
  renderSystemMessage,
  renderMessage,
  renderMessageText,
  renderCustomView,
} from './MessageContainer';

const Chats = (props) => {
  const {
    CameraIcon, 
    AudioIcon, 
    user, 
    SendIcon, 
    textInputStyle, 
    cameraIconStyle, 
    messagesContainerStyle,
    avatarImageStyle,
    avatarContainerStyle,
    bubbleContainerStyle,
    bubbleTimeTextStyle,
    bubbleWrapperStyle,
    bubbleBottomContainerStyle,
    bubbleTickStyle,
    bubbleContainerToNextStyle,
    bubbleContainerToPreviousStyle,
    renderMessageContainerStyle,
    renderMessageTextStyle,
    renderMessageLinkStyle,
    renderMessageCustomTextStyle,
    sendContainerStyle,
    data,
    onSubmitChat
  } = props;

  const [text, setText] = useState('');
  

  const onSend = (newMessages = []) => {
    onSubmitChat(newMessages)
  };

  return (
    <GiftedChat
      messages={data}
      text={text}
      onInputTextChanged={setText}
      onSend={onSend}
      user={user}
      alignTop
      alwaysShowSend
      scrollToBottom
      renderAvatarOnTop
      renderUsernameOnMessage={false}
      bottomOffset={80}
      minInputToolbarHeight={50}
      onPressAvatar={console.log}
      renderInputToolbar={renderInputToolbar}
      renderActions={(props) => renderActions({props,CameraIcon, cameraIconStyle})}
      renderComposer={(props) => renderComposer({props, textInputStyle})}
      renderSend={(props) => renderSend({props, AudioIcon, SendIcon, sendContainerStyle})}
      renderAvatar={(props) => renderAvatar({props, avatarImageStyle, avatarContainerStyle})}
      renderBubble={(props) => renderBubble({
        props, 
        bubbleContainerStyle,
        bubbleTimeTextStyle,
        bubbleWrapperStyle,
        bubbleBottomContainerStyle,
        bubbleTickStyle,
        bubbleContainerToNextStyle,
        bubbleContainerToPreviousStyle
      })}
      renderSystemMessage={renderSystemMessage}
      renderMessage={(props) => renderMessage({
        props, 
      })}
      renderMessageText={(props) => renderMessageText({
        props,
        renderMessageContainerStyle,
        renderMessageTextStyle,
        renderMessageCustomTextStyle,
        renderMessageLinkStyle
      })}
      // renderCustomView={renderCustomView}
      isCustomViewBottom
      messagesContainerStyle={messagesContainerStyle}
      parsePatterns={(linkStyle) => [
        {
          pattern: /#(\w+)/,
          style: linkStyle,
          onPress: (tag) => console.log(`Pressed on hashtag: ${tag}`),
        },
      ]}
    />
  );
};

export default Chats;