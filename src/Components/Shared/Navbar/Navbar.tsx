'use client';
import React, { useState } from 'react';
import { ConfigProvider, Input, Layout, Drawer, Button } from 'antd';
import Image from 'next/image';
import { AllImages } from '@/Components/AllImages/AllImages';
import {  MenuOutlined } from "@ant-design/icons";
import Link from 'next/link';

const { Header } = Layout;
const { Search } = Input;

const labels = [
  { name: "Home", link: '/' },
  { name: "Blogs", link: '/blogs' },
  { name: "About Us", link: '/about-us' },
];

const NavBar: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const onSearch = (value: string) => {
    console.log("Search input: ", value);
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Layout: {
              headerBg: "rgb(255,255,255)",
            //    "colorText": "rgb(250,219,20)"
            },
          },
        }}
      >
        <Layout>
          <Header style={{ display: 'flex', }}>
            <div className='h-full flex w-full items-center justify-between'>
     {/* Logo Section */}
     <div className="navbar-logo">
              <Image src={AllImages.logo} alt="Logo" height={0} width={0} className='h-32 w-32'/>
            </div>

            {/* Menu for large devices, centered */}
            <div className="navbar-menu hidden sm:flex flex-grow justify-center">
              {labels.map((item, index) => (
                <Link href={item.link} key={index}>
                  <button className='px-4 font-medium text-lg'>{item.name}</button>
                </Link>
              ))}
            </div>

            {/* Search bar */}
            <div className="navbar-search hidden sm:block">
              <Search
              className='mb-0 mt-3'
                placeholder="Search a Blog"
                allowClear
                size="middle"
                onSearch={onSearch}
              />
            </div>

            {/* Drawer button for small screens */}
            <Button
              className="navbar-drawer-button sm:hidden"
              icon={<MenuOutlined />}
              onClick={showDrawer}
            />
            </div>
       
          </Header>
        </Layout>

        {/* Drawer for small devices */}
        <Drawer
          title="Menu"
          placement="right"
          onClose={closeDrawer}
          visible={drawerVisible}
        >
         <div className="flex flex-col items-center space-y-4 mb-2">
            <div className="flex flex-col items-center space-y-2 w-full">
              {labels.map((item, index) => (
                <Link href={item.link} key={index}>
                  <button
                    className={`px-4 font-medium text-lg py-2 bg-teal-500 w-32 rounded-md text-white`}
                    // onClick={() => select(index)}
                  >
                    {item.name}
                  </button>
                </Link>
              ))}
              </div>
              </div>
          <Search
            placeholder="Search a Blog"
            allowClear
           
            size="middle"
         
            onSearch={onSearch}
          />
        </Drawer>
      </ConfigProvider>
    </div>
  );
};

export default NavBar;
