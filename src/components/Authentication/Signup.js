import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Signup = () => {
    const [show1, setshow1] = useState(false)
    const [show, setshow] = useState(false)
    const [Name, setname] = useState();
    const [Email, setemail] = useState()
    const [confirmpassword, setconfirmpassword] = useState()
    const [password, setpassword] = useState()
    const [pic, setpic] = useState()

    const handleClick =() => setshow(!show)
    const handleClick1 =() => setshow1(!show1)
    const postDetails =(pics)=>{};

    const submitHandler=()=> {};
  return (
    <VStack spacing= '5px'>

        <FormControl id='first-name' isRequired>
            
            <FormLabel>

             Name
            </FormLabel>

            <Input placeholder='Enter Your Name'
            onChange={(e)=>setname(e.target.value)}
            />
            </FormControl> 

            <FormControl id='email' isRequired>
            
            <FormLabel>

             Email
            </FormLabel>

            <Input type= 'email' placeholder='Enter Your email'
            onChange={(e)=>setemail(e.target.value)}
            />
            </FormControl>

            <FormControl id='password' isRequired>
            
            <FormLabel>

             Password
            </FormLabel>
            
            <InputGroup>
            <Input  type= {show? "text":'password'} placeholder='Enter Your Password'
            onChange={(e)=>setpassword(e.target.value)}
            />

            <InputRightElement width ="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
               {show ? "Hide" : "Show"}

                </Button>
            </InputRightElement>
            </InputGroup>
            
            </FormControl>

            <FormControl id='confirmpassword' isRequired>
            
            <FormLabel>

             Confirm password
            </FormLabel>

            <InputGroup>
            <Input  type= {show1? "text":'password'} placeholder='Enter Your Password'
            onChange={(e)=>setconfirmpassword(e.target.value)}
            />

            <InputRightElement width ="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick1}>
               {show1 ? "Hide" : "Show"}

                </Button>
            </InputRightElement>
            </InputGroup>
            </FormControl>

            <FormControl id='pic'>
            
            <FormLabel>

             Upload your Picture
            </FormLabel>

            <Input type= 'file' p={1.5}
            accept="image/*"
            onChange={(e)=>postDetails(e.target.files[0])}
            />
            </FormControl>


            <Button
            
            colorScheme="blue"
            width="100%"
            style={{ marginTop:15}}

            onClick={submitHandler}


            >


                Sign Up
            </Button>


    </VStack>
  )
}

export default Signup