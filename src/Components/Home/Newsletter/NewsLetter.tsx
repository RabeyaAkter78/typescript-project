"use client";
import { AllImages } from "@/Components/AllImages/AllImages";
import Image from "next/image";
import React, { useState } from "react";
import { Button, ConfigProvider, Form, Input } from "antd";

type LayoutType = Parameters<typeof Form>[0]["layout"];

const NewsLetter = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>("inline");

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  return (
    <div className="bg-[#edeae1] my-20">
      <div className="container mx-auto flex justify-start items-center gap-5">
        <Image
          src={AllImages.book}
          alt="newsletter img"
          width={800}
          height={400}
          className="object-cover"
        />
        <div>
          <p className="text-buttonColor font-serif italic">
            Subscribe to our newsletter
          </p>
          <h1 className="text-xl md:text-3xl font-bold uppercase ">
            Finding the perfect trails to hike is easy with our{" "}
            <span className="text-buttonColor ">newsletter</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo odio
            autem officiis architecto eum numquam, ipsam voluptatem tempora
            cumque suscipit.
          </p>
          <div className="flex justify-start items-center gap-5 py-10">
            <ConfigProvider
              theme={{
                components: {
                  Form: {
                    borderRadius: 0,
                    colorBorder: "rgb(237,234,225)",
                    colorPrimary: "rgb(89,129,91)",
                  },
                  Input: {
                    borderRadius: 0,
                  },
                },
              }}
            >
              <Form
                layout={formLayout}
                form={form}
                initialValues={{ layout: formLayout }}
                onValuesChange={onFormLayoutChange}
                style={{ maxWidth: formLayout === "inline" ? "none" : 600 }}
              >
                <Form.Item>
                  <Input placeholder="Name" />
                </Form.Item>
                <Form.Item>
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item>
                  <button className="px-5 py-1 bg-buttonColor text-white">
                    Subscribe
                  </button>
                </Form.Item>
              </Form>
            </ConfigProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
