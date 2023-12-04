import React, { FunctionComponent } from 'react';
// @ts-ignore
import ModalVideo from 'react-modal-video';
import './AppVideoModal.sass';

export interface IProps {
  videoId: string;
  isOpen: boolean;
  onClose: () => void;
}

export const AppVideoModal: FunctionComponent<IProps> = ({ videoId, isOpen, onClose }) => {
  return <ModalVideo channel='youtube' isOpen={isOpen} videoId={videoId} onClose={onClose} />;
};

export default AppVideoModal;
