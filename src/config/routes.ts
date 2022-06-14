import { RouteConfig } from "yocon-lib/dist/components/PageLayout";

const routes: RouteConfig[] = [
    {
        exact: false,
        path: "/",
        component: "@/layouts/index",
        isLayout: true,
        title: "优贝实验",
        routes: [
            {
                path: "/",
                redirect: "/home",
            },
            {
                path: "/home",
                component: "@/pages/home/index",
                title: "首页",
                isMenu: true,
                icon: "BarChartOutlined",
            },
        ],
    },
    { component: "@/pages/500", title: "500", path: "/500" },
    { component: "@/pages/404", title: "404" },
];
export default routes;
