/* eslint-disable react/jsx-no-undef */
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Stack, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { TbCurrencyNaira } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { selectMyObject } from 'redux/slices/dailyInputSlice';
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  DocumentData,
} from "firebase/firestore";
import { db } from 'config/firebase';
import { RootState } from 'redux/store';
import { deleteItem, updateItem } from 'redux/slices/inputSlice';

interface DateTimeProps {
  className?: string;
}

interface DateTimeState {
  dateTime: Date;
}

interface Item {
  id?: number;
  food: number;
  data: number;
  transit: number;
  transfers: number;
  others: number;
  sum: number;
  date: Date;
}

const AnalyticsContent = ({ className }: DateTimeProps) => {
  const divColor = useColorModeValue("white","#222636")
  const secondDivColor = useColorModeValue("linear-gradient(to right, #536976, #292e49)","#292c3d")
  const divGradient = useColorModeValue("linear-gradient(to bottom, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%);","linear-gradient(to right, #6a85b6 0%, #bac8e0 100%);")
  const divColor2 = useColorModeValue("#EDF2F7", "#353b54")
  const header2 = useColorModeValue("white", "white")
  const deleteScheme = useColorModeValue("red","blue")
  const bgGradient = useColorModeValue("linear-gradient(to right, #162961, #3969b9)","linear-gradient(to right, #28355e, #4e67b6);")

  const myObject = useSelector(selectMyObject)
  const Sum = myObject.food + myObject.data + myObject.others + myObject.transfers + myObject.transit


  //Date
  const [state, setState] = useState<DateTimeState>({
    dateTime: new Date(),
  });
 
  useEffect(() => {
    const interval = setInterval(() => {
      setState({ dateTime: new Date() });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dateOptions: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
  const timeOptions: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };


  const [data, setData] = useState<DocumentData | null>(null);

  useEffect(() => {
    // Set up a query that listens for new documents added to the collection
    const dataCollection = collection(db, "test3");
    const queryRef = query(
      dataCollection,
      where("date", "==", state.dateTime.toLocaleDateString("en-US", dateOptions))
    );
    const unsubscribe = onSnapshot(queryRef, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          setData(change.doc.data() ?? null);
          unsubscribe();
        }
      });
    });

    

    // Add a new document to the collection
    const userData = {
      food: myObject.food,
      transit: myObject.transit,
      data: myObject.data,
      transfers: myObject.transfers,
      others: myObject.others,
      date: state.dateTime.toLocaleDateString("en-US", dateOptions),
    };
    addDoc(dataCollection, userData);
  }, [dateOptions, myObject.data, myObject.food, myObject.others, myObject.transfers, myObject.transit, state.dateTime]);
  

  const dispatch = useDispatch()
    const handleDelete = (itemId: number) => {
      dispatch(deleteItem(itemId))
    }
  
    const items = useSelector((state: RootState) => state.number.items);
    const sumOfCategoriesById: { [id: number]: number } = {};
    const [editedItem, setEditedItem] = useState<Item | null>(null);
  
    items.forEach((item: Item) => {
      const id = item.id || 0;
      const sumOfCategories =
        item.food + item.data + item.transit + item.transfers + item.others;
  
      if (sumOfCategoriesById[id]) {
        sumOfCategoriesById[id] += sumOfCategories;
      } else {
        sumOfCategoriesById[id] = sumOfCategories;
      }
    });

    const handleUpdateItem = (updatedItem: Item) => {
      dispatch(updateItem(updatedItem));
      setEditedItem(null); // Clear the edited item state
    };
    
    const calculateSum = (item: Item) => {
      return item.food + item.data + item.transit + item.transfers + item.others;
    };
  return (
    <Flex
    flexDir="column"
  >
    {items.map((item: Item) => (
      <div key={item.id}>
    <Flex
      w={["18rem","18rem","33rem","55rem"]}
      h={["4rem","4rem","5rem","5rem"]}
      boxShadow="lg"
      borderRadius="1rem 0 1rem 0"
      mt="2rem"
      bg= {bgGradient}
      justifyContent="center"
      alignItems="center"
      >
      <Flex
        gap={["","","4rem","23rem"]}
        alignItems="center"
      >
        <Heading
          size={["","","md","md"]}
          mr={["1rem","","2rem",""]}
          ml={["","","1.5rem",""]}
          color="white"
        >
          {state.dateTime.toLocaleDateString('en-US', dateOptions)}
        </Heading>
        
        <Flex
          alignItems="center"
          >
          <Heading
           size={["","","md","md"]}
           color="white" 
           mr={["","","0.1rem","0.5rem"]}
           display={{ base: 'none', md: 'block' }}
          >
            Total: 
          </Heading>
          <Flex
            alignItems="center"
          >
            <Heading
              size={["","","lg","lg"]}
              mr={["","","-0.1rem","-0.2rem"]}
              mt={["","","0.2rem","0.2rem"]}
              display={{ base: 'none', md: 'block' }}
              color="white" 
            >
              <TbCurrencyNaira/> 
            </Heading>
            {/* {Object.keys(sumOfCategoriesById).map((id: string) => (
              <div key={id}> */}
                <Heading
                  size={["","","lg","lg"]}
                  display={{ base: 'none', md: 'block' }}
                  color="white" 
                >
                  {calculateSum(item)}
                </Heading>
              {/* </div>
            ))} */}
            

            <Popover
            >
              <PopoverTrigger>
                <Button
                  variant="ghost"
                  >
                    <Heading
                    size={["lg","","lg","lg"]}
                    color="white" 
                    >                          
                    <ChevronRightIcon/>
                    </Heading>
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                <Flex
                  flexDir="column"
                >
                  <Table variant="simple">
                    <Thead>
                      <Tr>
                        <Th>Catergories</Th>
                        <Th>Prices</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td fontWeight={600}>Food</Td>
                        <Td
                          display="flex"
                          flexDir="row"
                          fontWeight={600}
                        >
                          <Text
                            fontSize={["1.2rem","1.2rem","1.2rem","1.3rem"]}
                          >
                            <TbCurrencyNaira/>
                          </Text>
                         {item.food}
                        </Td>
                      </Tr>
                      <Tr>
                        <Td fontWeight={600}>Transit</Td>
                        <Td
                          display="flex"
                          flexDir="row"
                          fontWeight={600}
                        >
                          <Text
                            fontSize={["1.2rem","1.2rem","1.2rem","1.3rem"]}
                          >
                            <TbCurrencyNaira/>
                          </Text>
                         {item.transit}
                        </Td>
                      </Tr>
                      <Tr>
                        <Td fontWeight={600}>Data</Td>
                        <Td
                          display="flex"
                          flexDir="row"
                          fontWeight={600}
                        >
                          <Text
                            fontSize={["1.2rem","1.2rem","1.2rem","1.3rem"]}
                          >
                            <TbCurrencyNaira/>
                          </Text>
                         {item.data}
                        </Td>
                      </Tr>
                      <Tr>
                        <Td fontWeight={600}>Transfers</Td>
                        <Td
                          display="flex"
                          flexDir="row"
                          fontWeight={600}
                        >
                          <Text
                            fontSize={["1.2rem","1.2rem","1.2rem","1.3rem"]}
                          >
                            <TbCurrencyNaira/>
                          </Text>
                         {item.transfers}
                        </Td>
                      </Tr>
                      <Tr>
                        <Td fontWeight={600}>Others</Td>
                        <Td
                          display="flex"
                          flexDir="row"
                          fontWeight={600}
                        >
                          <Text
                            fontSize={["1.2rem","1.2rem","1.2rem","1.3rem"]}
                          >
                            <TbCurrencyNaira/>
                          </Text>
                         {item.others}
                        </Td>
                      </Tr>
                      <Tr
                        // display={{ base: 'flex', md: 'none' }}
                      >
                        <Td fontWeight={700}>Total:</Td>
                        <Td
                          display="flex"
                          flexDir="row"
                          fontWeight={700}
                        >
                          <Text
                            fontSize={["1.2rem","1.2rem","1.2rem","1.3rem"]}
                          >
                            <TbCurrencyNaira/>
                          </Text>
                          {/* {Object.keys(sumOfCategoriesById).map((id: string) => (
                            <div key={id}>
                              <p>{sumOfCategoriesById[parseInt(id)]}</p>
                              <hr />
                            </div>
                          ))} */}
                          {calculateSum(item)}
                        </Td>
                      </Tr>
                    </Tbody>

                  </Table>
                  <Flex
                    flexDir="row"
                    justifyContent="center"
                    alignItems="center"
                    gap="1.9rem"
                    mt="1rem"
                    mb="1rem"
                  >
                    <Button
                      onClick={() => handleDelete(item.id as number)}
                      colorScheme={deleteScheme}

                    >
                      delete
                    </Button>
                    <Button 
                      onClick={() => setEditedItem(item)}
                      variant="outline"
                      colorScheme="blue"
                    >
                      Edit
                    </Button>
                  </Flex>
                </Flex>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
      </div>
    ))}

      {editedItem && (
        <Modal isOpen onClose={() => setEditedItem(null)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Item</ModalHeader>
            <ModalBody>
              {/* Render the edit form inputs */}
              <Flex
                flexDir="column"
              >
                <Flex
                  flexDir="column"
                >
                  <Heading
                    fontSize="sm"
                  >
                    Food
                  </Heading>
                  <Input
                    value={editedItem.food}
                    onChange={(e) =>
                      setEditedItem({ ...editedItem, food: Number(e.target.value) })
                    }
                  />
                </Flex>
                <Flex>
                  <Heading
                    fontSize="sm"
                  >
                    Data
                  </Heading>
                  <Input
                    value={editedItem.data}
                    onChange={(e) =>
                      setEditedItem({ ...editedItem, data: Number(e.target.value) })
                    }
                  />
                </Flex>
                <Flex>
                  <Heading
                    fontSize="sm"
                  >
                    Transit
                  </Heading>        
                  <Input
                    value={editedItem.transit}
                    onChange={(e) =>
                      setEditedItem({ ...editedItem, transit: Number(e.target.value) })
                    }
                  />
                </Flex>
                <Flex>
                  <Heading
                    fontSize="sm"
                  >
                    Transfers
                  </Heading>
                  <Input
                    value={editedItem.transfers}
                    onChange={(e) =>
                      setEditedItem({ ...editedItem, transfers: Number(e.target.value) })
                    }
                  />
                </Flex>
                <Flex>
                  <Heading
                    fontSize="sm"
                  >
                    Others
                  </Heading>
                  <Input
                    value={editedItem.others}
                    onChange={(e) =>
                      setEditedItem({ ...editedItem, others: Number(e.target.value) })
                    }
                  />
                </Flex>
              </Flex>
              {/* Render other form inputs */}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" onClick={() => handleUpdateItem(editedItem)}>
                Save
              </Button>
              <Button variant="ghost" onClick={() => setEditedItem(null)}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
  </Flex>
  )
}

export default AnalyticsContent