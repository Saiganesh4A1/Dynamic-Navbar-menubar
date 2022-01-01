import React from "react";
// import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
// import * as GrIcons from 'react-icons/gr';

export const SidebarData = [
    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Users',
        path:'/users',
        icon:<AiIcons.AiOutlineUsergroupAdd/>,
        cName:'nav-text' 
    },
    {
        title:'Roles',
        path:'/roles',
        icon:<MdIcons.MdWork/>,
        cName:'nav-text'
    },
    {
        title:'Permissions',
        path:'/permissions',
        icon:<MdIcons.MdOutlineSecurity/>,
        cName:'nav-text' 
    }
]

