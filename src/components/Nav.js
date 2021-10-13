import React from 'react';
import { Menu } from 'semantic-ui-react';

const Nav = () =>{ 
    return (
      <div>
        <Menu pointing secondary>
        {/* icons8-user-64.png */}
        {/* <Image src='/images/wireframe/image.png' size='small' /> */}
          <Menu.Item
            name='home'
            // active={activeItem === 'home'}
            // onClick={this.handleItemClick}
          />
          <Menu.Item
            name='messages'
            // active={activeItem === 'messages'}
            // onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            // active={activeItem === 'friends'}
            // onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
            //   active={activeItem === 'logout'}
            //   onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>

      </div>
    );
  }


export default Nav;