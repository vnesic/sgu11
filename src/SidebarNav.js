import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

<SidebarNav sidebar={sidebar}>
    <SidebarWrap>
        <NavIcon to="#">
            <AiIcons.AiOutlineClose onClick={closeSidebar} />
        </NavIcon>
        {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} closeSidebar={closeSidebar} />;
        })}
    </SidebarWrap>
</SidebarNav>
