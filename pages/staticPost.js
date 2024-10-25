import React from 'react'
export async function getServerSideProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const output = await res.json()
    return{
        props :{
            apiDatas : output
        }
    }
}
function staticPost({apiDatas}) {
    console.log(apiDatas)
  return (
    <div><h1>Static SSG</h1>
    {apiDatas.map((apiData) => (
        <div key={apiData.id}>
            <h2>Title : {apiData.title}</h2>
            <p>Completed : {''+apiData.completed}</p>
        </div>
    )
    )}
    </div>
  )
}

export default staticPost