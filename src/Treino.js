import Rest from './rest'
import React from 'react'
import {useState,useEffect} from 'react'
import { id } from 'postcss-selector-parser'
import axios from 'axios'
const baseURL = 'https://appacademia-9ede4.firebaseio.com/'
const {useGet,usePost,useDelete} = Rest(baseURL)

const Treino = ({match}) => {
  const data = useGet(`Treino/${match.params.data}`)
  const dataPersonal = useGet(`Personal/${match.params.data}`)
  const [postData,salvar] = usePost(`Treino/${match.params.data}`)
  const [removeData,remover] = useDelete()
  const [id,setid]= useState('')
  const [aluno,setaluno]= useState('')
  const [exercicio,setExercicio]= useState('')
  const [ordem,setOrdem]= useState('')
  const [personal,setpersonal] = useState([])
  const [repeticao,setRepeticao]= useState('')
  const [serie,setSerie]= useState('')
  const [tempo,setTempo]= useState('')
  const[personalId, setPersonalId]= useState('')
  const onChangeid = evt =>{
    setid(evt.target.value)
  }
 const onChangeAluno = evt =>{
  setaluno(evt.target.value)
  } 
   
 



  const onChangepersonal = evt =>{

    setpersonal(evt.target.value)
  }

  const onChangeexercicio = evt =>{
    setExercicio(evt.target.value)
  }
 
  const onChangeordem = evt =>{
    setOrdem(evt.target.value)
  }
 
  const onChangerepeticao = evt =>{
    setRepeticao(evt.target.value)
  }
  const onChangeserie = evt =>{
    setSerie(evt.target.value)
  }
  const onChangetempo = evt =>{
      setTempo(evt.target.value)
  }
 
  
  
 

  
  const salvarTreino = async() =>{
    if(!isNaN(id) && id.search(/^[-]?\d+(\.)?\d+?$/) >=0) {
  await salvar({
       aluno,
     exercicio,
      ordem,
     personal,
      repeticao,
      serie,
      tempo :  id + id,
      id: parseFloat(id),
      
    })
    setaluno('')
    setid(0)
    setTempo(0)
    setExercicio('')
    setOrdem('')
    setpersonal('')
    setSerie('')
    setRepeticao('')
    data.refetch()
  }}
  const removerTreino = async(id) =>
  {
    await remover(`Treino/${match.params.data}/${id}`)
    data.refetch()
  }

  const buscar = async(id) =>
  {
    await buscar(`Treino/${match.params.data}/${id}`)
    data.refetch()
  }
  
 



  return (
  <div className ='container'>
      <h1>Treino</h1>
      <table className = 'table'>
      <thead>
         <tr>
         <th> ID </th>   
        <th> ALUNO </th> 
        <th>PERSONAL </th>
        <th>EXERCICIO </th>
        <th>REPETÇAO </th>
        <th>SÉRIE </th>
        <th>TEMPO</th>
        <th>ORDEM</th>


        </tr>
      </thead>
     <tbody>
       { data.data &&
     Object 
     .keys(data.data)
     .map(tre => {
       return(
           <tr key={tre}>
               <td>{data.data[tre].id}</td>
               <td>{data.data[tre].aluno}</td>
               <td>{data.data[tre].personal}</td>
               <td>{data.data[tre].exercicio}</td>
               <td>{data.data[tre].repeticao}</td>
               <td>{data.data[tre].serie}</td>
               <td>{data.data[tre].tempo}</td>
               <td>{data.data[tre].ordem}</td>

               <td className='text-right'>
                {data.data[tre].id} {''}
                 <button  className='btn btn-danger'onClick={() => removerTreino(tre)}>-</button>
                 </td>
           </tr>
       )

     })
      }
      <tr>
      <td><input type ='text' value={aluno} onChange={onChangeAluno}/></td>
      <td><input type='text'  value={personal}  onChange={onChangepersonal}/></td>
      <td><input type='text'  value={exercicio}  onChange={onChangeexercicio}/></td>
      <td><input type='text'  value={repeticao}  onChange={onChangerepeticao}/></td>
      <td><input type='text'  value={serie}  onChange={onChangeserie}/></td>
      <td><input type='text'  value={tempo}  onChange={onChangetempo}/></td>
      <td><input type='text'  value={ordem}  onChange={onChangeordem}/></td>
      <td><input type='text'  value={id}  onChange={onChangeid}/>
      <label for='exampleFormControlSelect1'>Personal</label>
      
      



      
  
  <div>
  <div class='form-group'>
    <label for='exampleFormControlSelect1'>Gêneros</label>
    <select class='form-control' onChange={onChangeid} value={personalId} >
  { data.data &&

     Object 
     .keys(dataPersonal.data)
     .map(per => {
       return(
         
        
  
     <option  value={dataPersonal.data[per].cref}>{dataPersonal.data[per].nome}</option>)}
  
          )

     }
     </select>
       </div>
    
      
  </div>
    )

         

      <button className= 'btn btn-success' onClick={salvarTreino}>+</button></td>
      </tr>

     </tbody>

     </table>
      
  </div>
    )
}
export default Treino