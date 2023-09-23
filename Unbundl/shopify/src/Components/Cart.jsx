import React from 'react'
import '../Styling/Cart.css'
import {
  Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Divider, ButtonGroup, Button, Text, Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup, StackDivider, Box, Flex
} from '@chakra-ui/react'
import CartNavbar from './CartNavbar'
import CartComponent from '../Components/CartComponent'

const Cart = () => {
  let cartData = JSON.parse(localStorage.getItem("choco")) || []
  let tp = 0
  for (let i = 0; i < cartData.length; i++) {
    tp += cartData[i].price
  }
  console.log(typeof cartData)

  const placeOrderObj = {
    "Total MRP": tp,
    "Discount on MRP": 0,
  };

  return (

    <>
      <div id='cartcontainer'>
        <Box>
          <CartNavbar />
        </Box>

        {
          cartData.length>0 ? 
          <Box m={"auto"} mt={{ base: '4rem', sm: "4rem", md: '6rem', lg: '6rem' }}
          width={{ base: "90%", sm: "90%", md: "70%", lg: "70%" }}
        >
          <Flex
            alignItems={"flex-start"}
            width={"100%"}
            justifyContent={"space-between"}
            flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
            m={"auto"}
            gap={6}
          >
            <Box width={{ base: "100%", sm: "100%", md: "60%", lg: "55%" }} margin={"auto"} mt={0}  >
              <Box m={"auto"}  >
                {cartData?.map((cart, i) => (
                  <CartComponent
                    key={i}
                    cart={cart}
                  />
                ))}
              </Box>
            </Box>
            <Box
              border={"0px solid gray"}
              width={{ base: "100%", sm: "100%", md: "50%", lg: "45%" }}
              p={3}
              boxShadow={'md'}
              id="cartCard"
            >
              <Box display={'flex'} borderBottom={"1px solid gray"} justifyContent={'space-between'} >
                <Text color={'white'} >Total Products  </Text>
                <Text color={'white'}>{cartData.length} </Text>
              </Box>
              <Box p={"1rem 0"} borderBottom={"1px solid gray"}>
                {Object.keys(placeOrderObj).map((item) => {
                  return (
                    <Flex key={item} justifyContent={"space-between"}>
                      <Text color={'white'} key={item} >{item}</Text>
                      <Text color={'white'}  >{placeOrderObj[item]}</Text>
                    </Flex>
                  );
                })}
              </Box>
              <Button _hover={{ backgroundColor: "white", color: "pink.400", outline: "2px solid #e10765" }} w={"100%"} mt={"2rem"} color={"white"} backgroundColor={"pink.400"}>PLACE ORDER</Button>
            </Box>
          </Flex>
        </Box> :
        <div className='cartEmpty'>
          <img src='giphy.gif' alt="" />
          <p>Cart is Empty...</p>
        </div>
        }
      </div>
    </>
  )
}

export default Cart