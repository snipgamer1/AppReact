import React from 'react';
import { Button, Space } from 'antd';
import Copyright from '../../components/pure/Copyright';
import MenuListItems from '../../components/pure/MenuListItems';
import { Navigate, useNavigate } from 'react-router-dom';


const Dashboard = () => {

    const navigate = useNavigate();

    const logout =()=> {
        navigate('/login')
    }
    return (
        <Space wrap>
            {/* <MenuListItems/> */}
            <Button type="primary"onClick={logout}>Login</Button>
            
            <Copyright/>
            {new Date().getFullYear()}
        </Space>
    );
}

export default Dashboard;
