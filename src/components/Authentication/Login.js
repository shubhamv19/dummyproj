import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'





const Login = () => {
       const [show1, setshow1] = useState(false)
    const [show, setshow] = useState(false)
    const [Name, setname] = useState();
    const [Email, setemail] = useState()
    const [password, setpassword] = useState()
    const [pic, setpic] = useState()

    const handleClick =() => setshow(!show)
    const submitHandler=()=>{};
  return (
    <VStack spacing= '5px'>

            <FormControl id='Email' isRequired>
            
            <FormLabel>

             Email
            </FormLabel>

            <Input type= 'Email' placeholder='Enter Your email'
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

            


            <Button
            
            colorScheme="blue"
            width="100%"
            style={{ marginTop:15}}

            onClick={submitHandler}


            >


                Login
            </Button>

            <Button
            
            colorScheme="cyan"
            width="100%"
            style={{ marginTop:15}}

            onClick={()=> {

                setemail("guest@example.com");
                setpassword("123456")
            }}


            >


                Guest User
            </Button>


    </VStack>
  )
}

export default Login