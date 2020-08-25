/* eslint-disable */
import React from "react";
import { Redirect } from 'react-router-dom'
import {Button} from 'antd'

export const outPutBtn = (redirect_to) => {
  const outPut = () => {
    return (
      <div>
        <Button type="primary">Output</Button>
      </div>
    )
  };
  outPut()
  return <Redirect to={redirect_to} />
};
