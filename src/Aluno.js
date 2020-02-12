import Rest from './rest'
import React from 'react'
import {useState} from 'react'
import { id } from 'postcss-selector-parser'
import  './teste.css'


const baseURL = 'https://appacademia-9ede4.firebaseio.com/'
const {useGet,usePost,useDelete} = Rest(baseURL)

const Aluno = ({match}) => {
  const data = useGet(`Aluno/${match.params.data}`)
  const [postData,salvar] = usePost(`Aluno/${match.params.data}`)
  const [removeData,remover] = useDelete()
  const [nome,setNome]= useState('')
  const [cpf,setCpf] = useState('')
  const onChangeNome = evt =>{
  setNome(evt.target.value)
  }

  const onChangeCpf = evt =>{
    setCpf(evt.target.value)
  }
  const salvarMovimentacao = async() =>{
    if(!isNaN(cpf) && cpf.search(/^[-]?\d+(\.)?\d+?$/) >=0) {
  await salvar({
      nome,
      cpf: parseFloat(cpf)
    })
    setNome('')
    setCpf(0)
    data.refetch()
  }}
  const removerMOvimentacao = async(id) =>
  {
    await remover(`Aluno/${match.params.data}/${id}`)
    data.refetch()
  }

  return (
  <div className ='container'>
      <h1>Movimentaçoes</h1>
      <table className = 'table'>
      <thead>
         <tr>
        <th> Descrição </th> 
        <th>Valor </th>
        </tr>
      </thead>
     <tbody>
       { data.data &&
     Object 
     .keys(data.data)
     .map(alu => {
       return(
           <tr key={alu}>
               <td>{data.data[alu].nome}</td>
               <td className='text-right'>
                {data.data[alu].cpf} {''}
                 <button  className='btn btn-danger'onClick={() => removerMOvimentacao(alu)}>-</button>
                 </td>
           </tr>
       )

     })
     


      }
      
      <tr>
      <div class="form">
                 
         <td><input type ='text' value={nome} onChange={onChangeNome}/></td>
         <td><input type='text'  value={cpf}  onChange={onChangeCpf}/></td>
         <td> <button className= 'button' onClick={salvarMovimentacao}>+</button></td>
         </div>
          </tr>

     </tbody>

     </table>
      
  </div>
    )
}
export default Aluno