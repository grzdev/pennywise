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
} from '@chakra-ui/react'
import React from 'react'
import { AddIcon } from "@chakra-ui/icons"
import { TbCurrencyNaira } from 'react-icons/tb'

const BudgetModal = () => {
  const bg = useColorModeValue("#437ecb","#4581ff")
  const selectBg = useColorModeValue("#407dd0","#407dd0")
  const naira = useColorModeValue("#407dd0","white")
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex>
        <Button
            // size={["","","","lg"]}
            width={["5rem","5rem","6.5rem","9rem"]}
            height={["2rem","5rem","2.5rem","3rem"]}
            borderRadius="1rem 0 1rem 0"
            bg={bg}
            onClick={onOpen}
            _hover={{
              bg: "#4e93ec"
            }}
          >
            <AddIcon color="white" fontSize="1.2rem" fontWeight={900}/>
        </Button>
        <Modal 
            closeOnOverlayClick={false} 
            isOpen={isOpen} 
            onClose={onClose}
            isCentered
            size={["xs","xs","md","lg"]}
            blockScrollOnMount={false}
        >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex
              alignItems="center"
              justifyContent="center"
              mt={["1.5rem","1.5rem","1.5rem","2rem"]}
            >
             <Heading
              size={["sm","sm","md","lg"]}
             >
              Create New Budget
             </Heading>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex
              justifyContent="center"
              flexDir="column"
              alignItems="center"
            >
              <Flex
                mt={["1.5rem","1.5rem","1.8rem","2rem"]}
              >
                <Select
                  placeholder='Pick Category'
                  variant="filled"
                  bg={selectBg}
                  color="white"
                  size={["sm","sm","md","md"]}
                  // size={["","","",""]}
                >
                  <option value="option1">
                    Food
                  </option>
                  <option value="option2">
                    Transit
                  </option>
                  <option value="option3">
                    Data
                  </option>
                  <option value="option4">
                    Transfers
                  </option>
                  <option value="option5">
                    Others
                  </option>
                </Select>
              </Flex>
              <Flex
                mt={["1.5rem","1.5rem","1.8rem","2rem"]}
              >
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    // eslint-disable-next-line react/no-children-prop
                    children={<TbCurrencyNaira color={naira} fontSize="1.3rem" />}
                    mt={["0.2rem","0.2rem","0.2rem","0.3rem"]}
                    />
                  <Input
                    mt={["0.2rem","0.2rem","0.3rem","0.3rem"]}
                    htmlSize={5} 
                    width="8rem"
                    type='number'
                    variant="filled"
                  />
                </InputGroup>
              </Flex>
              <Flex
                flexDir="column"
                justifyContent="center"
                mt={["1.5rem","1.5rem","1.8rem","2rem"]}
                alignItems="center"
              >
                <Heading
                  size={["xs","xs","xs","sm"]}
                  mb="0.5rem"
                >
                  Target Date
                </Heading>
                <Input
                  placeholder="Select Date"
                  size="md"
                  type="date"
                />
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter
            mt="1.7rem"
          >
            <Button 
              color="white"
              bg={selectBg} 
              mr={3} >
              Save
            </Button>
            {/* <Button onClick={onClose}>Cancel</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  )
}

export default BudgetModal