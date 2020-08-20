/* eslint-disable */
import React from "react";
import { Button } from 'antd'
import { Link } from 'react-router-dom'

export const NoMatch = () => {
    return (
      <>
        <Link to={'/'}><Button>Back to main</Button></Link>
        <h1 style={{'textAlign': 'center', 'fontWeight': '700', 'fontSize': '50px'}}>NOT FOUND</h1>
        <div style={{'textAlign': 'center', 'fontWeight': '700', 'fontSize': '50px'}}>404</div>
      </>
    )
};
