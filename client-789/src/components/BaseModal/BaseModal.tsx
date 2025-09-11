'use client';
import { Modal } from 'antd';
import React from 'react';
import styles from './styles.module.scss';

interface IModalComponent {
  setIsModalOpen: (isOpen: boolean) => void;
  isModalOpen: boolean;
  title: string;
  children: React.ReactNode;
  width?: string;
  close?: boolean;
  destroyOnClose?: boolean;
  afterClose?: any;
  maskClosable?: boolean;
  closeIcon?: any;
}

function BaseModal({
  setIsModalOpen,
  isModalOpen,
  title,
  children,
  width,
  close,
  destroyOnClose,
  afterClose,
  maskClosable,
  closeIcon,
}: IModalComponent) {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      title={title}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      closable={close}
      centered
      footer={null}
      width={width}
      className={styles.customModal}
      destroyOnClose={destroyOnClose}
      afterClose={afterClose}
      maskClosable={maskClosable}
      closeIcon={closeIcon}
    >
      {/* <div className="text-center text-xl font-medium">{title}</div> */}
      {/* {close && <div onClick={handleCancel} className={styles.iconX}></div>} */}
      {children}
    </Modal>
  );
}

export default BaseModal;
