/* eslint-disable react/jsx-no-undef */
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Stack, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue, useToast } from '@chakra-ui/react'
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
  doc,
  updateDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { db } from 'config/firebase';
import { RootState } from 'redux/store';
import { motion, useScroll } from "framer-motion"
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
  date: string
}

const AnalyticsContent = ({ className }: DateTimeProps) => {
  const deleteScheme = useColorModeValue("red","blue")
  const bgGradient = useColorModeValue("linear-gradient(to right, #162961, #3969b9)","linear-gradient(to right, #28355e, #4e67b6);")

  const dispatch = useDispatch()
  const toast = useToast()
  //Date
  // const [state, setState] = useState<DateTimeState>({
  //   dateTime: new Date(),
  // });
 
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setState({ dateTime: new Date() });
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // const dateOptions: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
  // const timeOptions: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };


  //Firebase Collection
  // useEffect(() => {
  //   // Set up a query that listens for new documents added to the collection
  //   const dataCollection = collection(db, "test3");
  //   const queryRef = query(
  //     dataCollection,
  //     where("date", "==", state.dateTime.toLocaleDateString("en-US", dateOptions))
  //   );
  //   const unsubscribe = onSnapshot(queryRef, (snapshot) => {
  //     snapshot.docChanges().forEach((change) => {
  //       if (change.type === "added") {
  //         setData(change.doc.data() ?? null);
  //         unsubscribe();
  //       }
  //     });
  //   });
  //   // Add a new document to the collection
  //   const userData = {
  //     food: myObject.food,
  //     transit: myObject.transit,
  //     data: myObject.data,
  //     transfers: myObject.transfers,
  //     others: myObject.others,
  //     date: state.dateTime.toLocaleDateString("en-US", dateOptions),
  //   };
  //   addDoc(dataCollection, userData);
  // }, [dateOptions, myObject.data, myObject.food, myObject.others, myObject.transfers, myObject.transit, state.dateTime]);

  //Delete Function
  const handleDelete = (itemId: number) => {
    dispatch(deleteItem(itemId))
    toast({
      title: 'Deleted',
      position: 'top',
      // description: "See you tomorrow.",
      status: 'success',
      duration: 5000,
      isClosable: true,
      // variant: "left-accent",
    })
  }

  //Redux selector
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

  //Update function
  const handleUpdateItem = async (updatedItem: Item) => {
    dispatch(updateItem(updatedItem));
    setEditedItem(null); // Clear the edited item state
    toast({
      title: 'Edited',
      position: 'top',
      // description: "See you tomorrow.",
      status: 'success',
      duration: 5000,
      isClosable: true,
      // variant: "left-accent",
    })
    
    // Update the item in the Firebase collection
    if (updatedItem.id) {
      try {
        const docRef = doc(db, "test5", updatedItem.id.toString());
  
        // Create an object with the updated data
        const itemData = {
          food: updatedItem.food,
          data: updatedItem.data,
          transit: updatedItem.transit,
          transfers: updatedItem.transfers,
          others: updatedItem.others,
          date: updatedItem.date,
          sum: updatedItem.sum,
        };
  
        await setDoc(docRef, itemData);
        console.log("Document updated successfully");
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    } else {
      console.error("Error updating document: Invalid item ID");
    }
  };
  
  //Sum
  const calculateSum = (item: Item) => {
    return item.food + item.data + item.transit + item.transfers + item.others;
  };
  
  return (
  
    // Main div
  <Flex
    flexDir="column"
  >
    <motion.div
      animate={{ y: 0 }}
      initial={{ y: 150 }}
      transition={{ duration: 0.8 }}
    >  
    {items.map((item: Item) => (
      <div key={item.id}>
      <Flex
        w={["18rem","18rem","30rem","55rem"]}
        h={["4rem","4rem","5rem","5rem"]}
        boxShadow="lg"
        borderRadius="1rem 0 1rem 0"
        mt="1.7rem"
        mb="0.5rem"
        bg= {bgGradient}
        justifyContent="center"
        alignItems="center"
        >
        <Flex
          alignItems="center"
          w={["15rem","15rem","29rem","52rem"]}
        >
          <Flex>
            <Heading
              size={["","","md","md"]}
              mr={["1rem","","2rem",""]}
              ml={["","","1.5rem",""]}
              color="white"
            >
            {item.date}
            </Heading>
          </Flex>
          
          <Flex
            alignItems="center"
            ml="auto"
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
                  <Heading
                    size={["","","lg","lg"]}
                    display={{ base: 'none', md: 'block' }}
                    color="white" 
                  >
                    {calculateSum(item)}
                  </Heading>
              <Popover
                isLazy
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
                        edit
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
    </motion.div>

      {/* Edit Modal */}
      {editedItem && (
        <Modal 
          isOpen onClose={() => setEditedItem(null)} 
          isCentered 
          blockScrollOnMount={false}
          closeOnOverlayClick={false}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Item</ModalHeader>
            <ModalBody>
              {/* Render the edit form inputs */}
              <Flex
                flexDir="column"
                gap="1rem"
              >
                <Flex
                  alignItems="center"
                  // gap="16rem"
                >
                  <Heading
                    fontSize="lg"
                    mr="auto"
                  >
                    Food
                  </Heading>
                  <Input
                    value={editedItem.food}
                    onChange={(e) =>
                      setEditedItem({ ...editedItem, food: Number(e.target.value) })
                    }
                    w="5rem"
                    type="number"
                  />
                </Flex>
                <Flex
                  alignItems="center"
                  // gap="16rem"
                >
                  <Heading
                    fontSize="lg"
                    mr="auto"
                  >
                    Data
                  </Heading>
                  <Input
                    value={editedItem.data}
                    onChange={(e) =>
                      setEditedItem({ ...editedItem, data: Number(e.target.value) })
                    }
                    w="5rem"
                    type="number"
                  />
                </Flex>
                <Flex
                  alignItems="center"
                  // gap="16rem"
                >
                  <Heading
                    fontSize="lg"
                    mr="auto"
                  >
                    Transit
                  </Heading>        
                  <Input
                    value={editedItem.transit}
                    onChange={(e) =>
                      setEditedItem({ ...editedItem, transit: Number(e.target.value) })
                    }
                    w="5rem"
                    type="number"
                  />
                </Flex>
                <Flex
                  alignItems="center"
                  // gap="16rem"
                >
                  <Heading
                    fontSize="lg"
                    mr="auto"
                  >
                    Transfers
                  </Heading>
                  <Input
                    value={editedItem.transfers}
                    onChange={(e) =>
                      setEditedItem({ ...editedItem, transfers: Number(e.target.value) })
                    }
                    w="5rem"
                    type="number"
                  />
                </Flex>
                <Flex
                  alignItems="center"
                  // gap="16rem"
                >
                  <Heading
                    fontSize="lg"
                    mr="auto"
                  > 
                    Others
                  </Heading>
                  <Input
                    value={editedItem.others}
                    onChange={(e) =>
                      setEditedItem({ ...editedItem, others: Number(e.target.value) })
                    }
                    w="5rem"
                    type="number"
                  />
                </Flex>
              </Flex>
              {/* Render other form inputs */}
            </ModalBody>
            <ModalFooter
              gap="1rem"
            >
              <Button colorScheme="blue" onClick={() => handleUpdateItem(editedItem)}>
                Save
              </Button>
              <Button variant="outline" onClick={() => setEditedItem(null)}>
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