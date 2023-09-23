import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Divider, ButtonGroup, Button, Text } from '@chakra-ui/react'
import '../Styling/Main.css'
import Navbar from './Navbar';
import { toast } from 'react-hot-toast'

function Main() {
    const [selectedChocolates, setSelectedChocolates] = useState([]);
    const [addItem, setAddItem] = useState(false)

    const chocolates = [
        { id: 1, name: 'Cadbury Dairy Milk Silk Chocolate', price: 80, img: 'dairyMilkSilk.png' },
        { id: 2, name: 'Kitkat Chocolate Candy Bar', price: 30, img: 'kitkat.png' },
        { id: 3, name: 'SNICKERS Peanut Filled Chocolates', price: 40, img: 'snickers.png' },
        { id: 4, name: 'FERRERO ROCHER Ferns N Petals', price: 90, img: 'ferrero.png' },
        { id: 5, name: 'NESTLE Munch Chocolate Crunchy Wafer', price: 30, img: 'munch.png' },
        { id: 6, name: 'Amul DARK CHOCOLATE Bars', price: 40, img: 'amul.png' },
        { id: 7, name: 'GALAXY Smooth Milk Chocolate', price: 20, img: 'galaxy.png' },
        { id: 8, name: 'Cadbury 5 Star Chocolate', price: 30, img: '5star.png' },
    ];


    const maxItems = 8;

    let cartData = localStorage.getItem("choco") || []

    const handleChocolateSelection = (chocolate) => {
        console.log(chocolate, selectedChocolates)
        if (selectedChocolates.length < maxItems) {
            toast.success("Item added successfully")
            setSelectedChocolates([...selectedChocolates, chocolate]);
            setAddItem(true)
        } else {
            toast.error("Maximum limit reached")
        }
    };

    useEffect(() => {
        if (addItem) {
            localStorage.setItem("choco", JSON.stringify(selectedChocolates))
        }
        setAddItem(false)


    }, [addItem])


    return (
        <>
            <Navbar />
            <div className="App" id='banner-image'>
                <h1 id='heading'>Chocolates</h1>
                <div className="chocolate-list">
                    {chocolates.map((chocolate) => (
                        <Card maxW='sm' id='container'>
                            <CardBody>
                                <Image
                                    src={chocolate.img}
                                    alt={chocolate.name}
                                    borderRadius='lg'
                                    id='image'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md' color='white'>{chocolate.name}</Heading>
                                    <Text color='white' fontSize='2xl'>
                                        ₹{chocolate.price}
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter id='addToCartBtn'>
                                <Button variant='solid' colorScheme='blue' onClick={() => handleChocolateSelection(chocolate)}>
                                    Add to cart
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Main;



