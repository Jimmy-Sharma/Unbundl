import React from 'react'

import {
    Box,
    Flex,
    Avatar,
    Text,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Image,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import '../Styling/Navbar.css'

const Navbar = () => {

    const navigate=useNavigate()

    const handleCart=()=>{
        navigate("/cart")
    }

    return (
        <>
            <Box id='navbar' px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box color={'white'} fontSize={'30px'} fontWeight={'bold'}>
                        Unbundl
                    </Box>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7} id='cart-Btn'>
                            <Button onClick={handleCart}>
                                Cart
                            </Button>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}

export default Navbar
