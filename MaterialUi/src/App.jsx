import React, { useState } from 'react'
import {AppBar, Box,
  Button,
  ButtonGroup,
  Checkbox,
  Container,
  Grid2,
 MenuItem,
  Radio, 
  Select,
   Slider, Switch, Tab, TextField,Tabs } from '@mui/material'
import {Favorite, FavoriteBorder} from '@mui/icons-material'

const App = () => {
   const [name, setName] = useState([])
   const [gender, setGender] = useState('male')
   const [val, setVal] = useState([40,50])
   const [course, setCourse] = useState("")
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
  
  const updateval = (e,item) => {
   setVal(item)
   console.log(val)
  }

  const updatecourse = (e,val) => {
    setCourse(e.target.value)
  }

  const getData = (e) =>{
    console.log(e.target.value)
  }

  const updateSwitch = (e,val) => {
    console.log(val)
  }

  return (
    <>
    {/* Button */}
    <Button color="primary" variant='contained'>Click me</Button>

    {/* ButtonGroup */}
    <ButtonGroup color='secondary' variant='contained'>
      <Button>Hello</Button>
      <Button>Hello</Button>
      <Button>Hello</Button>
    </ButtonGroup>

    {/* Checkbox */}
    <Checkbox color='secondary' value='Anil'  onChange={(e)=>getvalue(e)} />
    <Checkbox color='secondary' value='Akbar'  onChange={(e)=>getvalue(e)} />
    <Checkbox color='secondary' value='Anthani'  onChange={(e)=>getvalue(e)} />
    <Checkbox color='secondary' value='xyz' indeterminate  onChange={(e)=>getvalue(e)} />
    <Checkbox color='secondary' value='Heart' icon={<FavoriteBorder />} checkedIcon={<Favorite />}  onChange={(e)=>getvalue(e)} />

    {/* Radiobutton */}
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

    {/* slidebar */}
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

    {/* Rangeslidbar */}
    <div style={{width:300, margin:40}}>
      <Slider 
      color='primary'
      value={val}
      max={200}
      onChange={updateval}
      />
    </div>

    {/* Select */}
    <Select value={course} displayEmpty onChange={updatecourse}>
      <MenuItem value="">Select Course</MenuItem>
      <MenuItem value={1}>Node</MenuItem>
      <MenuItem value={2}>Php</MenuItem>
      <MenuItem value={3}>java</MenuItem>
      <MenuItem value={4}>javascript</MenuItem>
    </Select>

    {/* Textfield */}
    <TextField
    label="Enter name"
    variant='filled'
    type='password'
    onChange={getData}
    />

    {/* Switch */}
    <Switch 
    size='small'
    onChange={updateSwitch}
    />

    {/* Box */}
    <Box sx={{bgcolor:'red', width: 100, height:100, '&:hover':{bgcolor:'blue'}}}>
      <Button sx={{bgcolor:'black', margin:3 , color:'white'}}>click me</Button>
    </Box>

    {/* Container */}
    <Container sx={{color:'red', bgcolor:'black'}}>
      <h1>Hi this is a container</h1>
    </Container>
    <Container sx={{color:'red', bgcolor:'black'}} maxWidth='md'>
      <h1>Hi this is a container</h1>
    </Container>
    <Container sx={{color:'red', bgcolor:'black'}} maxWidth='sm'>
      <h1>Hi this is a container</h1>
    </Container>

    {/* Grid */}
    <Grid2 container rowSpacing={4} columnSpacing={2}>
      <Grid2 item size={{ xs:3, md:6} } sx={{bgcolor:'blue', color:'white'}}><h1>Block 1</h1></Grid2>
      <Grid2 item size={{ xs:3, md:6} } sx={{bgcolor:'blue', color:'white'}}><h1>Block 1</h1></Grid2>
      <Grid2 item size={{ xs:3, md:6} } sx={{bgcolor:'blue', color:'white'}}><h1>Block 1</h1></Grid2>
      <Grid2 item size={{ xs:3, md:6} } sx={{bgcolor:'blue', color:'white'}}><h1>Block 1</h1></Grid2>
    </Grid2>
  
     {/* Hidden element
     <Grid2 container spacing={2} marginTop={5}>
        <Grid2 item size={{ sm:3, xs:6} } sx={{bgcolor:'green', color:'white'}}><h1>Block 1</h1></Grid2>
        <Grid2 item size={{ sm:3, xs:6} } sx={{bgcolor:'green', color:'white'}}><h1>Block 2</h1></Grid2>
        <Grid2 item size={{ sm:3, xs:6} } sx={{bgcolor:'green', color:'white'}}><h1>Block 3</h1></Grid2>
        <Grid2 item size={{ sm:3, xs:6} } sx={{bgcolor:'green', color:'white'}}><h1>Block 4</h1></Grid2>
    </Grid2> */}

    {/* Tabs */}
    <AppBar position='static' sx={{marginTop:5}}>
      <Tabs>
        <Tab label='item 1' />
        <Tab label='item 1' />
        <Tab label='item 1' />
      </Tabs>
     </AppBar>
    
    </>
  )
}

export default App