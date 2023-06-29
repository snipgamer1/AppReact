import { HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import { useNavigate } from 'react-router-dom';



const getIcon = (icon) => { 
        switch (icon) {
            case 'HOME':
                return(<Space><HomeOutlined/></Space>)
            case 'TASK':
                return(<Space></Space>)
            case 'SETTINGS':
            return(<Space><SettingOutlined/></Space>)
            default:
                break;
        }

}
const MenuListItems =({list}) =>{
    const navigate = useNavigate();
    const navigateTo=(path) =>{
        navigate(path)
    }

    return(
        <div></div>
        // <list>
        //      {list.map(({text, path, icon}, index) => 
        //         (
        //             {/* <ListItem key={index} button onClick={() => navigateTo(path)}>
        //                 <ListItemIcon>
        //                     {getIcon(icon)}
        //                 </ListItemIcon>
        //                 <ListItemText 
        //                     primary={text}
        //                 />
        //             </ListItem>
        //         ) */}
        //     )}
        // </list>
    )
}



