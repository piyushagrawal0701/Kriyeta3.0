import React from 'react'
import FileUpload from '../../Components/File Upload/FileUpload'
// import Field1 from '../../Components/Fields section/Field1'

const Dashboard = () => {
  return (
    <>
    <div className='pt-48 text-white text-center text-4xl'>
        <h1>Dashboard</h1>
    </div>

    <div className='flex justify-center items-center text-white'>
      <FileUpload/>
    </div>
    </>
  )
}

export default Dashboard