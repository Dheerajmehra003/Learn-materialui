import React, { useState } from 'react'
import {Button, ButtonGroup, Checkbox, Radio, Slider, SliderMark} from '@mui/material'
import {Favorite, FavoriteBorder} from '@mui/icons-material'

const App = () => {
   const [name, setName] = useState([])
   const [gender, setGender] = useState('male')
   const mark=[
    {
      value:0,
      label:'start',
    },
    {
      value:50,
      label:'middle',
    },
    {
      value:100,
      label:'stop',
    }
   ]

   function getvalue(e) 
  {
    let data = name;
    data.push(e.target.value)
    console.log(data)
  }

   function setValue(e){
    console.log(gender)
    setGender(e.target.value)
  }

  const getSliderValue = (e,val) =>{
   console.log(e.target.value)
  }


  return (
    <>
    <Button color="primary" variant='contained'>Click me</Button>
    <ButtonGroup color='secondary' variant='contained'>
      <Button>Hello</Button>
      <Button>Hello</Button>
      <Button>Hello</Button>
    </ButtonGroup>
    <Checkbox color='secondary' value='Anil'  onChange={(e)=>getvalue(e)} />
    <Checkbox color='secondary' value='Akbar'  onChange={(e)=>getvalue(e)} />
    <Checkbox color='secondary' value='Anthani'  onChange={(e)=>getvalue(e)} />
    <Checkbox color='secondary' value='xyz' indeterminate  onChange={(e)=>getvalue(e)} />
    <Checkbox color='secondary' value='Heart' icon={<FavoriteBorder />} checkedIcon={<Favorite />}  onChange={(e)=>getvalue(e)} />
     <div>
      <Radio 
      color='primary'
      value='Male'
      checked={gender==='male'}
      onChange={(e)=>setValue(e)}
      />
      <span>Male</span>
    </div>
     <div>
     <Radio 
     color='secondary'
     value='Female'
     checked={gender==='female'}
     onChange={(e)=>setValue(e)}
     />
     <span>Female</span>
    </div>
    <div style={{width:300, margin:40}}>
      <Slider 
      color='secondary'
      step={20}
      marks={mark}
      valueLabelDisplay='auto'
      defaultValue={30}
      onChange={getSliderValue}
      />
    </div>
    </>
  )
}

export default App