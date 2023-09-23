import { CloseIcon } from "@chakra-ui/icons";
import {
    Box,
    Checkbox,
    Flex,
    HStack,
    Image,
    Select,
    Stack,
    Text,
} from "@chakra-ui/react";
import React from "react";


const CartComponent = ({ cart }) => {

    return (
        <Box>
            <Box mb={5} border={'1px solid #B2B3C8'} borderRadius={5} id="cartCard">
                <Flex direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} >
                    <Stack w={"100%"} ml={2} display={{ base: 'flex', sm: 'flex', md: 'none', lg: 'none' }}
                        spacing={3} margin={"auto"} mb={6} boxShadow={'md'} borderRadius={5} p={3} >          <Box
                            pl={"0.5rem"}
                            textAlign={"left"}
                            width={{ sm: "100%", md: "100%", lg: "100%" }}
                        >
                            <Flex>
                                <Box
                                    display={"flex"}
                                    justifyContent={"space-between"}
                                    alignItems={"baseline"}
                                    gap={"0.5rem"}
                                    mt={1}
                                >
                                    <Text fontSize={"0.9rem"} fontWeight={"600"}  color={'white'}>
                                        Rs.{cart.price}
                                    </Text>
                                </Box>
                            </Flex>
                        </Box>
                    </Stack>
                    <Box
                        width={{ sm: "50%", md: "30%", lg: "33%" }}
                        position={"relative "}
                        margin={"auto"}
                    >
                        <Image src={cart.img} width={'90%'} height={'100px'} ></Image>
                    </Box>
                    <Stack w={"100%"} ml={2} spacing={3} display={{ base: 'none', sm: 'none', md: 'flex', lg: 'flex' }}  >
                        <Box
                            pl={"0.5rem"}
                            textAlign={"left"}
                            width={{ sm: "100%", md: "100%", lg: "100%" }}
                        >

                            <Flex>
                                <Box
                                    display={"flex"}
                                    justifyContent={"space-between"}
                                    alignItems={"baseline"}
                                    gap={"0.5rem"}
                                    mt={1}
                                >
                                    <Text fontSize={"0.9rem"} fontWeight={"600"} color={'white'}>
                                        Rs.{cart.price}
                                    </Text>
                                </Box>
                            </Flex>
                        </Box>
                    </Stack>
                </Flex>
            </Box>

        </Box>
    );
};

export default CartComponent;