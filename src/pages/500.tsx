import React from "react";
import { Result, Button } from "antd";
import { history } from "umi";

export default function() {
    return (
        <Result
            status='500'
            title='500'
            subTitle='服务端错误'
            extra={
                <Button
                    type='primary'
                    onClick={() => history.push({ pathname: "/" })}
                >
                    回到首页
                </Button>
            }
        />
    );
}
