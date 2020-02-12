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
  const[personalId,setPersonalId]= useState('')
  const dp = dataPersonal.data.data
  const onChangeid = evt =>{
    setPersonalId(evt.target.value)
  }
  const onChangeAluno = evt =>{
  setaluno(evt.target.value)
  }
   
  const onChangepersonal = evt =>{

    setPersonalId(evt.target.value)
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
     personal: personalId,
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
}
export default Treino