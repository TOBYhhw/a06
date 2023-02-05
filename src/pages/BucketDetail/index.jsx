import React from 'react'
import { useParams, Link } from 'react-router-dom'
import BucketTable from "../../components/bucketTable"
import Popover from "../../components/popover"
import fileDetail from "../../components/fileDetail"
import { Button, Input, Space } from "antd"
import {
    SearchOutlined, UploadOutlined,
    DownloadOutlined,

} from "@ant-design/icons"
import arrowLeft from "../../assets/arrow-left.svg"
import "./index.css"
export default function BucketDetail() {
    const params = useParams()
    const columns = [
        {
            title: "文件名",
            dataIndex: "name",
            key: "name",
            width: "calc(25vw - 43px)",
            onHeaderCell: () => ({
                style: {
                    backgroundColor: "#dde1ff",
                    fontSize: "20px",
                    fontWeight: 400,
                    color: "#73768B",
                    borderRadius: "8px 0 0 8px",
                    borderColor: "#dde1ff"
                }
            }),
            onCell: () => ({ style: { backgroundColor: "#f4f5fb" } })
        },
        {
            title: "更新时间",
            dataIndex: "time",
            key: "time",
            width: "calc(25vw - 43px)",
            align: "center",
            onHeaderCell: () => ({
                style: {
                    backgroundColor: "#dde1ff",
                    fontSize: "20px",
                    fontWeight: 400,
                    color: "#73768B"
                }
            }),
            onCell: () => ({ style: { backgroundColor: "#f4f5fb" } })
        },
        {
            title: "文件大小",
            dataIndex: "number",
            key: "number",
            width: "calc(25vw - 43px)",
            align: "center",

            onHeaderCell: () => ({
                style: {
                    backgroundColor: "#dde1ff",
                    fontSize: "20px",
                    fontWeight: 400,
                    color: "#73768B"
                }
            }),
            onCell: () => ({ style: { backgroundColor: "#f4f5fb" } })
        },
        {
            title: "操作",
            key: "operation",
            width: "calc(25vw - 43px)",
            align: "center",

            onHeaderCell: () => ({
                style: {
                    backgroundColor: "#dde1ff",
                    fontSize: "20px",
                    fontWeight: 400,
                    color: "#73768B",
                    borderRadius: "0 8px 8px 0"
                }
            }),
            onCell: () => ({ style: { backgroundColor: "#f4f5fb" } }),
            render: (text, record, index) => (
                <Space size='middle'>
                    <Popover
                        name='文件详情'
                        button={false}
                        record={record}
                        mode={<a style={{ color: "#3452CE" }}>详情</a>}
                        content={<fileDetail />}
                    />
                    <a style={{ color: "#3452CE" }} >链接</a>
                    <a style={{ color: "#3452CE" }} >下载</a>
                    <a style={{ color: "#BA1A1A" }}>删除</a>
                </Space>
            )
        }
    ]
    const data = [
        {
            key: "1",
            name: "111111",
            time: "2002.02.02",
            number: "22MB"
        },
        {
            key: "2",
            name: "111111",
            time: "2022.02.02",
            number: "22MB"
        },
        {
            key: "3",
            name: "111111",
            time: "2022.02.02",
            number: "22MB"
        }
    ]
    return (
        <div className='bucket-detail'>
            <div className='bucket-detail-top'>
                <div className='bucket-detail-top-back'>
                    <Link to='/home/bucket/main'>
                        <img src={arrowLeft} alt="" /></Link>
                </div>
                <div className='bucket-detail-top-name'>
                    Bucket
                </div>
                <div className='bucket-detail-top-line'>
                    /
                </div>
                <div className='bucket-detail-top-detail'>
                    {params.name}
                </div>
            </div>
            <div className='bucket-detail-mid'>
                <div className='bucket-detail-mid-left'>
                    <Button
                        icon={<UploadOutlined />}
                        className='bucket-detail-mid-left-upload'
                        type='text'
                    >
                        上传文件
                    </Button>
                    <Button
                        icon={<DownloadOutlined />}
                        className='bucket-detail-mid-left-download'
                        type='text'
                    ></Button>
                    <Button className='bucket-detail-mid-left-delete' type='text'>
                        <svg
                            viewBox='0 0 1024 1024'
                            version='1.1'
                            xmlns='http://www.w3.org/2000/svg'
                            p-id='1393'
                            width='20'
                            height='20'
                        >
                            <path
                                d='M723.2 204.8V102.4C723.2 44.8 672 0 614.4 0H409.6C352 0 300.8 44.8 300.8 102.4v102.4H96v102.4h51.2v563.2c0 83.2 70.4 153.6 153.6 153.6h416c83.2 0 153.6-70.4 153.6-153.6V307.2h57.6V204.8H723.2zM409.6 102.4h204.8v102.4H409.6V102.4z m364.8 768c0 25.6-25.6 51.2-51.2 51.2H300.8c-25.6 0-51.2-25.6-51.2-51.2V307.2h518.4v563.2h6.4z'
                                fill='currentColor'
                                p-id='1394'
                            ></path>
                            <path
                                d='M358.4 409.6h102.4v409.6H358.4zM563.2 409.6h102.4v409.6H563.2z'
                                fill='currentColor'
                                p-id='1395'
                            ></path>
                        </svg>
                    </Button>
                    <div className='bucket-detail-mid-left-selected'>0个已选中</div>
                </div>
                <Input
                    className='bucket-detail-mid-right-input'
                    placeholder='搜索文件...'
                    prefix={<SearchOutlined className='bucket-detail-mid-right-input-svg' />}
                ></Input>
            </div>
            <div className="bucket-detail-bottom">
                <BucketTable columns={columns} data={data} />
            </div>
        </div>
    )
}