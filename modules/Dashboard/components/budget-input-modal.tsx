import { 
    Button, 
    Flex,
    useColorModeValue,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Text,
    Heading,
    Select,
    InputGroup,
    InputLeftElement,
    Input,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    HStack,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { AddIcon, ChevronDownIcon, ChevronLeftIcon } from "@chakra-ui/icons"
import { TbCurrencyNaira } from 'react-icons/tb'
import { motion } from 'framer-motion'
import { IoBusOutline, IoFastFoodOutline, IoFastFoodSharp, IoWifi } from 'react-icons/io5'
import { BiDotsHorizontalRounded, BiTransferAlt } from 'react-icons/bi'
import { BsFillCheckCircleFill } from 'react-icons/bs'

const BudgetModal = () => {
  const bg = useColorModeValue("linear-gradient(to right, #acb6e5, #86fde8);","linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)")
  const selectBg = useColorModeValue("#407dd0","#407dd0")
  const naira = useColorModeValue("#407dd0","white")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const addIcon = useColorModeValue("#162A62","")
  const text = useColorModeValue("#0081e7","")
  const completed = useColorModeValue("linear-gradient( 135deg, #FFA6B7 10%, #1E2AD2 100%)","linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)")


  const modal1 = useDisclosure()
  const modal2 = useDisclosure()
  const modal3 = useDisclosure()
  const modal4 = useDisclosure()

  const [selectedDate, setSelectedDate] = useState<string>('');

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleBudgetSave = () => {
    modal1.onClose()
    modal2.onClose()
    modal3.onClose()
    modal4.onClose()
  }

  return (
    <Flex>
      <motion.div
        whileInView={{ y: 0, opacity: 1}}
        initial={{ y: 100, opacity: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <Button
            // size={["","","","lg"]}
            width={["5rem","5rem","8rem","9rem"]}
            height={["3rem","3rem","4rem","4rem"]}
            borderRadius="1rem 0 1rem 0"
            bg={bg}
            onClick={modal1.onOpen}
            _hover={{
              bg: "#4e93ec"
            }}
          >
            <Text
            color={addIcon}
            fontWeight={900}
            fontSize={["","","1.6rem","1.7rem"]}

            >
              <AddIcon />
            </Text>
        </Button>
      </motion.div>

      {/* Modal 1 */}
        <Modal 
            closeOnOverlayClick={false} 
            isOpen={modal1.isOpen}
            onClose={modal1.onClose}
            isCentered
            size={["sm","sm","lg","lg"]}
            blockScrollOnMount={false}
        >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex
              alignItems="center"
              justifyContent="center"
              mt={["8rem","5rem","8rem","9rem"]}
            >
             <Heading
              size={["lg","lg","xl","xl"]}
             >
              Pick Category
             </Heading>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}
            mb={["5rem","3rem","4rem","4rem"]}
          >
            <Flex
              justifyContent="center"
              flexDir="column"
              alignItems="center"
            >
              <Flex
                mt={["1.5rem","4.5rem","3rem","2rem"]}
                flexDir="column"
                alignItems="center"
              >
                <Menu>
                  <MenuButton 
                    as={Button} 
                    rightIcon={<ChevronDownIcon color="white"  fontSize={["1.3rem","1.3rem","1.9rem","1.8rem"]}/>}
                    bg="#4681df"
                    mb={["","","2rem","3rem"]}
                    _hover={{
                      bg:"#3968B8"
                    }}
                    h={["3rem","3rem","4rem","4rem"]}
                  >
                    <Heading
                      size={["","","md","md"]}
                      p={["","","1rem","1rem"]}
                      color="white"
                    >
                      Categories
                    </Heading>
                  </MenuButton>
                  <MenuList>
                    <Flex
                      flexDir="column"
                    >
                      <Button
                      onClick={modal2.onOpen} 
                      >
                        <MenuItem icon={<IoFastFoodOutline />}>Food</MenuItem>
                      </Button>
                      <Button
                        onClick={modal2.onOpen}
                      >
                        <MenuItem icon={<IoBusOutline />}>Transit</MenuItem>
                      </Button>
                      <Button
                        onClick={modal2.onOpen}
                      >
                        <MenuItem icon={<IoWifi />}>Data</MenuItem>
                      </Button>
                      <Button
                        onClick={modal2.onOpen}
                      >
                        <MenuItem icon={<BiTransferAlt />}>Transfers</MenuItem>
                      </Button>
                      <Button
                        onClick={modal2.onOpen}
                      >
                        <MenuItem icon={<BiDotsHorizontalRounded />}>Others</MenuItem>
                      </Button>
                    </Flex>
                  </MenuList>
                </Menu>
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter
            mt="1.7rem"
          >
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Modal 2 */}
      <Modal 
            closeOnOverlayClick={false} 
            isOpen={modal2.isOpen}
            onClose={modal2.onClose}
            isCentered
            size={["sm","sm","lg","lg"]}
            blockScrollOnMount={false}
        >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex
              alignItems="center"
              justifyContent="center"
              mt={["3.5rem","2.5rem","4rem","3rem"]}
            >
             <Heading
              size={["xl","lg","xl","xl"]}
             >
              Amount
             </Heading>
            </Flex>
          </ModalHeader>
          <ModalCloseButton>
          <Text
                fontSize={["1.6rem","1.6rem","1.8rem","2rem"]}
            >
                <ChevronLeftIcon/>
            </Text>
          </ModalCloseButton>
          <ModalBody pb={6}>
          <Flex
                flexDir="column"
                justifyContent="center"
                alignItems="center"
                gap="1.5rem"
            >
                <HStack
                    gap={["0.5rem","0.6rem","1rem","1rem"]}
                    mt={["2rem","1rem","2rem","3rem"]}
                >
                    <Button
                        colorScheme="blue"
                        borderRadius="full"
                        size={["md","md","lg","lg"]}
                        // value={myObject.others}
                        onClick={modal3.onOpen} 
                    >
                       <TbCurrencyNaira/> 1,000
                    </Button>
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        // value={myObject.others}
                        onClick={modal3.onOpen}
                    >
                       <TbCurrencyNaira/> 2,000
                    </Button>
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        // value={myObject.others}
                        onClick={modal3.onOpen}
                    >
                       <TbCurrencyNaira/> 3,000
                    </Button>
                </HStack>
                <HStack
                    gap={["0.5rem","0.6rem","1rem","1rem"]}
                >
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        // value={myObject.others}
                        onClick={modal3.onOpen}
                    >
                       <TbCurrencyNaira/> 5,000
                    </Button>
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        // value={myObject.others}
                        onClick={modal3.onOpen}
                    >
                       <TbCurrencyNaira/> 10,000
                    </Button>
                </HStack>
                <Flex
                    mt="1rem"
                    flexDir="column"
                >
                    <Text
                        color={text}
                    >
                        Different amount?
                    </Text>
                    <InputGroup>
                        <InputLeftElement
                        pointerEvents='none'
                        // eslint-disable-next-line react/no-children-prop
                        children={<TbCurrencyNaira color='#0aba00' fontSize="1.3rem" />}
                        mt={["0.25rem","0.25rem","0.25rem","0.35rem"]}
                        />
                        <Input
                            mt={["0.2rem","0.2rem","0.3rem","0.3rem"]}
                            htmlSize={5} 
                            width="8rem"
                            type='number'
                            variant="filled"
                            placeholder='Amount'
                            name="others"
                            // value={myObject.others}
                            // onChange={(e) => handleNumberChange('others', parseInt(e.target.value, 10))}
                        />
                    </InputGroup>
                </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter
            mb="1.7rem"
          >
            <Button 
              color="white"
              bg={selectBg} 
              onClick={modal3.onOpen}
              mr={3} >
              Next
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Model 3 */}
      <Modal 
            closeOnOverlayClick={false} 
            isOpen={modal3.isOpen}
            onClose={modal3.onClose}
            isCentered
            size={["sm","sm","lg","lg"]}
            blockScrollOnMount={false}
        >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex
              alignItems="center"
              justifyContent="center"
              mt={["9rem","6rem","8rem","9rem"]}
            >
             <Heading
              size={["lg","lg","xl","xl"]}
             >
               Deadline
             </Heading>
            </Flex>
          </ModalHeader>
          <ModalCloseButton>
          <Text
                fontSize={["1.6rem","1-.6rem","1.8rem","2rem"]}
            >
                <ChevronLeftIcon/>
            </Text>
          </ModalCloseButton>
          <ModalBody pb={6}>         
            <Flex
              // w={["","","","16rem"]}
              justifyContent="center"
              alignItems="center"
              mt={["1rem","3rem","3rem","3rem"]}
            >
              <Input
                type="date"
                id="date-input"
                value={selectedDate}
                onChange={handleDateChange}
                size="lg"
                w={["11.5rem","11.5rem","12rem","12rem"]}
                h={["3rem","3rem","4rem","4rem"]}
                bg="#4681df"
                _hover={{
                  bg:"#3968B8"
                }}
                placeholder="Date"
                color="white"
                fontWeight={700}
              />
            </Flex>
          </ModalBody>
          <ModalFooter
            mt={["5rem","3rem","4rem","3rem"]}
            mb={["3rem","3rem","3rem","3rem"]}
          >
            <Button 
              color="white"
              bg={selectBg} 
              onClick={modal4.onOpen}
              mr={3} 
              size="lg"
              >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

       {/* Model 4 */}
       <Modal 
            closeOnOverlayClick={false} 
            isOpen={modal4.isOpen}
            onClose={modal4.onClose}
            isCentered
            size={["sm","sm","lg","lg"]}
            blockScrollOnMount={false}
        >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex
              alignItems="center"
              justifyContent="center"
              mt={["6rem","6rem","7rem","9rem"]}
              flexDir="column"
            >
             <Text
              fontSize={["8rem","6rem","7rem","7rem"]}
              color="#1ca8e2  "
             >
              <BsFillCheckCircleFill/>
             </Text>
            </Flex>
          </ModalHeader>
          <ModalBody pb={6}> 
            <Flex
              justifyContent="center"
              alignItems="center"
              mt={["4rem","4rem","5rem","4rem"]}
              mb={["4rem","4rem","5rem","4rem"]}
            >
              <motion.div
                  whileInView={{ y: 0, opacity: 1}}
                  initial={{ y: 100, opacity: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
              <Button 
                color="white"
                onClick={handleBudgetSave}
                size="lg"
                w={["7rem","7rem","10rem","12rem"]}
                h={["4rem","4rem","4rem","4rem"]}
                bg={completed}
                borderRadius="1rem 0 1rem 0 "
                >
                Done
              </Button>
              </motion.div>
            </Flex>        
          </ModalBody>
          <ModalFooter
          >
            
          </ModalFooter>
        </ModalContent>
      </Modal>

    </Flex>
  )
}

export default BudgetModal