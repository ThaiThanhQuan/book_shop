import { FilterTwoTone, ReloadOutlined } from "@ant-design/icons"
import { Button, Checkbox, Col, Divider, Form, InputNumber, Pagination, Rate, Row, Tabs } from "antd"
import 'styles/home.scss'

const HomePage = () => {

    const items = [
        {
            key: '1',
            label: 'Phổ biến',
            children: <></>
        },
        {
            key: '2',
            label: 'Hàng mới',
            children: <></>
        },
        {
            key: '3',
            label: 'Giá thấp đến cao',
            children: <></>
        },
        {
            key: '4',
            label: 'Giá cao đến thấp',
            children: <></>
        }
    ]

    return (
        <div className="container">
            <Row gutter={[20, 20]}>
                <Col md={4} sm={0} xs={0} style={{ border: '1px solid green' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span><FilterTwoTone />Bộ lọc tìm kiếm</span>
                        <ReloadOutlined title="Reset" onClick={() => { }} />
                    </div>
                    <Form
                    >
                        <Form.Item
                            name="category"
                            label="Danh mục sản phẩm"
                            labelCol={{ span: 24 }}
                        >
                            <Checkbox.Group>
                                <Row>
                                    <Col span={24}>
                                        <Checkbox value="A">
                                            A
                                        </Checkbox>
                                    </Col>
                                    <Col span={24}>
                                        <Checkbox value="B">
                                            B
                                        </Checkbox>
                                    </Col>
                                    <Col span={24}>
                                        <Checkbox value="C">
                                            C
                                        </Checkbox>
                                    </Col>
                                    <Col span={24}>
                                        <Checkbox value="D">
                                            D
                                        </Checkbox>
                                    </Col>
                                    <Col span={24}>
                                        <Checkbox value="E">
                                            E
                                        </Checkbox>
                                    </Col>
                                    <Col span={24}>
                                        <Checkbox value="F">
                                            F
                                        </Checkbox>
                                    </Col>
                                </Row>
                            </Checkbox.Group>
                        </Form.Item>
                        <Divider />
                        <Form.Item
                            label="Khoảng giá"
                            labelCol={{ span: 24 }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Form.Item name={["range", "form"]}>
                                    <InputNumber
                                        name="form"
                                        min={0}
                                        placeholder="đ Từ"
                                    // formatter={(value) => }
                                    />
                                </Form.Item>

                                <Form.Item name={["range", "to"]}>
                                    <InputNumber
                                        name="fotorm"
                                        min={0}
                                        placeholder="đ ĐẾN"
                                    // formatter={(value) => }
                                    />
                                </Form.Item>
                            </div>

                            <div>
                                <Button onClick={() => { }} style={{ width: '100%' }} type="primary">Áp dụng</Button>
                            </div>
                        </Form.Item>

                        <Divider />
                        <Form.Item
                            label="Đánh giá"
                            labelCol={{ span: 24 }}
                        >
                            <div>
                                <Rate value={5} disabled style={{ color: '#ffce3d' }}></Rate>
                            </div>
                            <div>
                                <Rate value={4} disabled style={{ color: '#ffce3d' }}></Rate>
                                <span className="ant-rate-text">trở lên</span>
                            </div>
                            <div>
                                <Rate value={3} disabled style={{ color: '#ffce3d' }}></Rate>
                                <span className="ant-rate-text">trở lên</span>
                            </div>
                            <div>
                                <Rate value={2} disabled style={{ color: '#ffce3d' }}></Rate>
                                <span className="ant-rate-text">trở lên</span>
                            </div>
                            <div>
                                <Rate value={1} disabled style={{ color: '#ffce3d' }}></Rate>
                                <span className="ant-rate-text">trở lên</span>
                            </div>

                        </Form.Item>
                    </Form>
                </Col>

                <Col md={20} sm={24} xs={0} style={{ border: '1px solid red' }}>
                    <Row>
                        <Tabs
                            defaultActiveKey="1"
                            items={items}></Tabs>
                    </Row>
                    <Row className="customize-row">
                        <div className="column">
                            <div className="wrapper">
                                <div className="wrapper">
                                    <img src="http://localhost:8080/images/book/2-9e3ea8bedd6f628d1a7f57abcad391071.jpg" />
                                </div>
                                <div className="text">Salt, Fat, Acid, Heat: Mastering the Elements of Good Cooking</div>
                                <div className="price">
                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(70000)}
                                </div>
                                <div className="rate_sold">
                                    <Rate value={5} disabled style={{ color: '#ffce3d' }}></Rate>
                                    <span>Đã bán 1k</span>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="wrapper">
                                <div className="wrapper">
                                    <img src="http://localhost:8080/images/book/2-9e3ea8bedd6f628d1a7f57abcad391071.jpg" />
                                </div>
                                <div className="text">Salt, Fat, Acid, Heat: Mastering the Elements of Good Cooking</div>
                                <div className="price">
                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(70000)}
                                </div>
                                <div className="rate_sold">
                                    <Rate value={5} disabled style={{ color: '#ffce3d' }}></Rate>
                                    <span>Đã bán 1k</span>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="wrapper">
                                <div className="wrapper">
                                    <img src="http://localhost:8080/images/book/2-9e3ea8bedd6f628d1a7f57abcad391071.jpg" />
                                </div>
                                <div className="text">Salt, Fat, Acid, Heat: Mastering the Elements of Good Cooking</div>
                                <div className="price">
                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(70000)}
                                </div>
                                <div className="rate_sold">
                                    <Rate value={5} disabled style={{ color: '#ffce3d' }}></Rate>
                                    <span>Đã bán 1k</span>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="wrapper">
                                <div className="wrapper">
                                    <img src="http://localhost:8080/images/book/2-9e3ea8bedd6f628d1a7f57abcad391071.jpg" />
                                </div>
                                <div className="text">Salt, Fat, Acid, Heat: Mastering the Elements of Good Cooking</div>
                                <div className="price">
                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(70000)}
                                </div>
                                <div className="rate_sold">
                                    <Rate value={5} disabled style={{ color: '#ffce3d' }}></Rate>
                                    <span>Đã bán 1k</span>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="wrapper">
                                <div className="wrapper">
                                    <img src="http://localhost:8080/images/book/2-9e3ea8bedd6f628d1a7f57abcad391071.jpg" />
                                </div>
                                <div className="text">Salt, Fat, Acid, Heat: Mastering the Elements of Good Cooking</div>
                                <div className="price">
                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(70000)}
                                </div>
                                <div className="rate_sold">
                                    <Rate value={5} disabled style={{ color: '#ffce3d' }}></Rate>
                                    <span>Đã bán 1k</span>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="wrapper">
                                <div className="wrapper">
                                    <img src="http://localhost:8080/images/book/2-9e3ea8bedd6f628d1a7f57abcad391071.jpg" />
                                </div>
                                <div className="text">Salt, Fat, Acid, Heat: Mastering the Elements of Good Cooking</div>
                                <div className="price">
                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(70000)}
                                </div>
                                <div className="rate_sold">
                                    <Rate value={5} disabled style={{ color: '#ffce3d' }}></Rate>
                                    <span>Đã bán 1k</span>
                                </div>
                            </div>
                        </div>
                    </Row>

                    <Divider />
                    <Row style={{ display: 'flex', justifyContent: "center" }}>
                        <Pagination
                            defaultCurrent={6}
                            total={500}
                            responsive
                        />
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default HomePage