import React from 'react';
import { Menu } from 'antd';

export const Navbar = (props) => {
    return (
        <Menu theme="dark" onClick={props.onClick} selectedKeys={props.current} mode="horizontal">
            <Menu.Item key="home">
            Home
            </Menu.Item>
            <Menu.Item key="projects">
            Projects
            </Menu.Item>
            <Menu.Item key="about">
            About
            </Menu.Item>
        </Menu>
    );
}