import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom'; 

const Sidebar = {

  container: {}
  

};

/* const menuItemStyles = {
  button: ({ level, active, disabled }) => {

    if (level === 0)
      return {
        color: disabled ? '#f5d9ff' : '#d359ff',
        backgroundColor: active ? '#eecef9' : undefined,
      };
  },
}; */

function SideBars(){

    return(

        <Sidebar>
           
           <Menu>
                <SubMenu label="Charts">
                <MenuItem> Pie charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
                </SubMenu>
                <MenuItem> Documentation </MenuItem>
                <MenuItem> Calendar </MenuItem>
            </Menu>

        
        </Sidebar>
    );

}


export default SideBars;