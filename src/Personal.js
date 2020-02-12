import Rest from './rest'
import React from 'react'
import {useState} from 'react'
import { id } from 'postcss-selector-parser'

const baseURL = 'https://appacademia-9ede4.firebaseio.com/'
const {useGet,usePost,useDelete} = Rest(baseURL)

const Personal = ({match}) => {
  const data = useGet(`Personal/${match.params.data}`)
  const [postData,salvar] = usePost(`Personal/${match.params.data}`)
  const [removeData,remover] = useDelete()
  const [nome,setNome]= useState('')
  const [cref,setcref] = useState('')
  
  const onChangeNome = evt =>{
  setNome(evt.target.value)
  }

  const onChangecref = evt =>{
    setcref(evt.target.value)
  }

  
  const salvarPersonal = async() =>{
    if(!isNaN(cref) && cref.search(/^[-]?\d+(\.)?\d+?$/) >=0) {
  await salvar({
      nome,
      cref: parseFloat(cref)
      
    })
    setNome('')
    setcref(0)
    data.refetch()
  }}
  const removerPersonal = async(id) =>
  {
    await remover(`Personal/${match.params.data}/${id}`)
    data.refetch()
  }

  return (
  <div className ='container'>
      <h1>Personal</h1>
      <table className = 'table'>
      <thead>
         <tr>
        <th> NOME </th> 
        <th>CREF </th>
        </tr>
      </thead>
     <tbody>
       { data.data &&
     Object 
     .keys(data.data)
     .map(per => {
       return(
           <tr key={per}>
               <td>{data.data[per].nome}</td>
               <td className='text-right'>
                {data.data[per].cref} {''}
                 <button  className='btn btn-danger'onClick={() => removerPersonal(per)}>-</button>
                 </td>
           </tr>
       )

     })
      }
      <tr>
      <td><input type ='text' value={nome} onChange={onChangeNome}/></td>
      <td><input type='text'  value={cref}  onChange={onChangecref}/>
      <button className= 'btn btn-success' onClick={salvarPersonal}>+</button></td>
      </tr>

     </tbody>

     </table>
      
  </div>
    )
}
export default Personal