"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { App, ConfigProvider } from "antd";
import themeConfig from "@/theme/themeConfig";

export default function AntdProvider({ children }) {
  return (
    <AntdRegistry>
      <ConfigProvider theme={themeConfig} componentSize="middle">
        {/* <App> enables App.useApp() for message / notification / modal with theme context */}
        <App>{children}</App>
      </ConfigProvider>
    </AntdRegistry>
  );
}
