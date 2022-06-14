import React from "react";
import { AuthService, PageLayout } from "yocon-lib";
import { useLocation, history, Link } from "umi";
import { message } from "antd";
import { BarChartOutlined } from "@ant-design/icons";
import { IS_MRICO_ENV } from "@/utils";
import routes from "@/config/routes";

const menuIconMap = {
    BarChartOutlined: <BarChartOutlined />,
};

function Layout(props: any) {
    const { pathname } = useLocation();
    message.config({
        maxCount: 1,
    });

    return (
        <PageLayout
            pathname={pathname}
            routes={routes}
            showLoginModal={
                !IS_MRICO_ENV &&
                process.env.NODE_ENV == "development" &&
                !AuthService.isLogin()
            }
            navPorps={{
                selectedKeys: [pathname],
                defaultOpenKeys: ["/task", "/warn"],
                iconMap: menuIconMap,
                onClick: (e) => history.push({ pathname: e.key }),
            }}
            onLoginAction={() => history.replace({ pathname: "/" })}
            renderBreadcrumb={(link, name) => <Link to={link}>{name}</Link>}
        >
            {props.children}
        </PageLayout>
    );
}

export default Layout;
