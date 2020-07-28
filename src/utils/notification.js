/* eslint-disable */
import React from "react";
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";

export const infoAction = (error_info, redirect_to) => {
  const openNotification = () => {
    notification.open({
      message: "Notification Title",
      description: error_info,
      icon: <SmileOutlined style={{ color: "#108ee9" }} />,
    });
  };

  openNotification();
  if (typeof window !== 'undefined' && redirect_to !== '') {
    window.location = `${redirect_to}`
  }
};
