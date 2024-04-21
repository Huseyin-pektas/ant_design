import React, { useEffect, useState } from 'react'
import { Button, Table,  Popconfirm } from 'antd'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';




const DataTable = () => {

  const [gridData, setGridData] = useState([])
  const [loading, setLoading] = useState(false)
  // const [maindata, setMainData] = useState([])
 

  useEffect(() => {
    LoadData();
  }, [])



  const LoadData = async () => {
    setLoading(true)
    const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
    setGridData(response.data);
    setLoading(false)

  }

  const dataWithAge = gridData.map((item) =>
    ({ ...item, age: Math.floor(Math.random() * 6) + 20, }))

  const modifiedDta = dataWithAge.map(({ body, ...item }) => ({
    ...item,
    key: item.kid, message: body
  }));

  const handleDelete =(value)=>{
    const dataSource = [...modifiedDta];
    const filteredData = dataSource.filter((item)=> item.id !== value.id);
    setGridData(filteredData);
  }

  const colums = [

    {
      title: "Sıra No",
      dataIndex: "id",
      align: "center",
      rowScope: 'row',
      editTable: true


    },
    {
      title: "Adı",
      dataIndex: "name",
      rowScope: 'row',
      align: 'center',
      editTable: true

    },
    {
      title: "E-mail",
      dataIndex: "email",
      rowScope: 'row',
      editTable: true

    },
    {
      title: "Yaşı",
      dataIndex: "age",
      rowScope: 'row',
      align: 'center',
      editTable: true

    },
    {
      title: "Mesajı",
      dataIndex: "message",
      rowScope: 'row',
      editTable: true
    },
    {
      title: "İşlemler",
      dataIndex: "",
      rowScope: 'row',
      align: 'center',
      render: (text, record) => (
        modifiedDta.length >= 1 ? (
          <Popconfirm title="Silmek isteğinizden emin misiniz"
            onConfirm={() => handleDelete(record)}>
            <Button className='text-2xl text-white bg-black'>Sil</Button>

          </Popconfirm>
        ) : null
        // <div className="flex justify-center gap-1">
        //     <Button className='text-2xl text-white bg-black'>Sil</Button>
        //     <Button className='text-2xl text-white bg-info' > Cevapla</Button>

        // </div>
      ),

    },

  ]

  return (
    <div>
      <div className='flex justify-center align-center'>
        <h4 className='flex justify-center align-center'>Bu Tablo Ant Design İle Oluşturulmuştur</h4>
      </div>

      <Table

        scroll={{ x: 1100 }}
        pagination={true}
        columns={colums}
        bordered
        dataSource={modifiedDta}
        loading={loading}

      />
      {/* <Pagination
      onChange={onChange}
      itemRender={itemRender}
      defaultCurrent={1}
      defaultPageSize={10}
      pageSizeOptions={[10, 20, 50, 100]}
      onSizeChanger={true}
      onShowSizeChange={onShowSizeChange}
      showTotal={(total)=>`Toplam ${total} Kullanıcı`}
      /> */}
    </div>
  )
}

export default DataTable
