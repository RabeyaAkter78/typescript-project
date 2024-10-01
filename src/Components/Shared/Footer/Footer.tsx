"use client";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { Button, ConfigProvider, Form, Input } from "antd";
import Link from "next/link";
import dynamic from "next/dynamic";
import { AllImages } from "@/Components/AllImages/AllImages";
import Image from "next/image";
import { ValidateErrorEntity } from "rc-field-form/lib/interface"; // Import for stricter typing

function Footer() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selected, setSelected] = useState<number | null>(null); // Specify type
  const [form] = Form.useForm();

  const labels = [
    { name: "About Us", link: "" },
    { name: "Contact Us", link: "" },
    { name: "FAQ", link: "" },
    { name: "Travel Tips", link: "" },
    { name: "Destination", link: "" },
  ];

  const onFinish = async (values: { email: string }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { email } = values;
    form.resetFields();
  };

  // Update the type of errorInfo
  const onFinishFailed = (
    errorInfo: ValidateErrorEntity<{ email: string }>
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="bg-neutral-900">
      <ConfigProvider
        theme={{
          components: {
            Form: {
              itemMarginBottom: 20,
            },
            Input: {
              borderRadius: 0,
            },
            Button: {
              borderRadius: 0,
            },
          },
        }}
      >
        <div className="container mx-auto">
          <div className="py-10 text-neutral-300 flex flex-col lg:flex-row justify-between lg:items-center gap-5 px-5">
            <div className="flex gap-2 justify-center">
              <h1 className="text-6xl font-bold">
                <Image
                  src={AllImages.footerLogo}
                  alt="logo"
                  height={0}
                  width={0}
                  className="object-cover"
                />
              </h1>
            </div>
            <div className="flex flex-col justify-center items-start">
              <p className="text-xl font-semibold">Important Links</p>
              {labels.map((item, index) => (
                <Link href={item.link} key={index}>
                  <button
                    className={`md:font-medium text-md py-1 md:text-lg ${
                      selected === index
                        ? "border-0 border-b-2 border-green-700"
                        : ""
                    }`}
                  >
                    {item.name}
                  </button>
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-5 justify-center items-start">
              <div>
                <h2 className="text-3xl">Newsletter</h2>
                <p>
                  Want to know what we are up to? Sign up to the newsletter and
                  join our tribe.
                </p>
                <div>
                  <Form
                    form={form}
                    name="basic"
                    labelCol={{ xs: 24, sm: 24, md: 24 }}
                    wrapperCol={{ xs: 24, sm: 24, md: 24 }}
                    style={{ maxWidth: "100%", width: "100%" }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed} // Correct onFinishFailed
                    autoComplete="off"
                  >
                    <Form.Item
                      name="email"
                      rules={[
                        { required: true, message: "Please input your Email!" },
                      ]}
                    >
                      <Input placeholder="Email" />
                    </Form.Item>

                    <Button block htmlType="submit">
                      Subscribe
                    </Button>
                  </Form>
                </div>
              </div>
              <p>Follow us on</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-center">
                <FaFacebookF className="w-5 h-5 " />
                <FaTwitter className="w-5 h-5 " />
                <FaLinkedinIn className="w-5 h-5 " />
                <FaPinterestP className="w-5 h-5 " />
                <BsInstagram className="w-5 h-5 " />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p className="text-center my-5 text-white pb-5">
          Copyright © 2024 Travel24 Bd
        </p>
      </ConfigProvider>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
