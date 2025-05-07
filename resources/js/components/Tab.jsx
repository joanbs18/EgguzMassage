import React from "react";
import { Tabs } from "antd";

const Tab = ({ items }) => (
    <Tabs
        defaultActiveKey="1"
        items={items}
        style={{
            maxWidth: "120rem",
            margin: "auto"
        }}
    />
);

export default Tab;
