"use client";

import React from "react";
import { Row, Col } from "antd";
import {
  UserOutlined,
  TeamOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";

export default function OurService() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h3 className="text-center text-3xl md:text-4xl font-bold mb-8">
          Our Online Architectural & Landscape Design Process
        </h3>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} md={8}>
            <div className="bg-white p-6 rounded-xl shadow-md flex items-start">
              <UserOutlined className="text-green-500 text-4xl mr-4 mt-1" />
              <div>
                <h4 className="text-xl font-semibold">
                  Build Your Design Profile
                </h4>
                <hr className="my-4 border-t-2 border-gray-300 w-16" />
                <p className="text-base leading-6">
                  Share project details & inspiration. Upload photos &
                  measurements. Get assigned to your designer.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className="bg-white p-6 rounded-xl shadow-md flex items-start">
              <TeamOutlined className="text-green-500 text-4xl mr-4 mt-1" />
              <div>
                <h4 className="text-xl font-semibold">
                  Collaborate with Designer
                </h4>
                <hr className="my-4 border-t-2 border-gray-300 w-16" />
                <p className="text-base leading-6">
                  Host a virtual consult in your yard. Align on your project
                  scope. Your design is underway.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className="bg-white p-6 rounded-xl shadow-md flex items-start">
              <FileDoneOutlined className="text-green-500 text-4xl mr-4 mt-1" />
              <div>
                <h4 className="text-xl font-semibold">Finalize Your Design</h4>
                <hr className="my-4 border-t-2 border-gray-300 w-16" />
                <p className="text-base leading-6">
                  Review your landscape design. Request revisions if needed.
                  Coordinate your tree and plant delivery with Bower & Branch.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
