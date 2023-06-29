import React from 'react';

// Ant Components
import { Space, Typography } from 'antd';
const { Text, Link } = Typography;

const Copyright = () => {
    return (
        <Space>
            <text strong>Copyright C</text>
            <Link href='https://github.com/snipgamer1' color='Green'>Snip Company</Link>
        </Space>
            
    );
}

export default Copyright;
