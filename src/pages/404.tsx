import React from "react";
import { Result, Button } from "antd";
import { history } from "umi";

export default function() {
    return (
        <Result
            status='404'
            title='404'
            subTitle='你访问的页面不存在'
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
