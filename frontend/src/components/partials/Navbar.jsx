import React, { useState } from 'react';
import { Anchor, Drawer, Button} from 'antd';
import {MenuOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom'; 
import "antd/dist/antd.css";

const { Link: AnchorLink} = Anchor;

function AppHeader(props) {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <img alt="logo" className="fas fa-bolt" src="https://knockknockwhoisthere.files.wordpress.com/2018/03/dotblog.png"></img>
          <Link to="/">Blog</Link>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <AnchorLink href="/" title="Home"/>
            <AnchorLink href="/about" title="About"/>
            <AnchorLink href="/contact" title="Contact" />
            <Button type="primary" href="/register">Sign-up</Button>
            <Button type="default" href="/login">Log-in</Button>
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <MenuOutlined />
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <AnchorLink href="/" title="Home"/>
              <AnchorLink href="/about" title="About"/>
              <AnchorLink href="/contact" title="Contact" />
              <Button type="primary" href="/register">Sign-up</Button>
              <Button type="default" href="/login">Log-in</Button>
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;