import React from 'react';

import {FiAlertCircle, FiXCircle} from 'react-icons/fi';
import { ToastMessage, useToast } from '../../hooks/toast';

import { Container} from './styles';
import Toast from './Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({messages}) => {
  const { removeToast } = useToast();

  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} toast={message}/>
      ))}
    </Container>
  )
}

export default ToastContainer;