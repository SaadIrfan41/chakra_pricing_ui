'use client'
import { ArrowIcon, CheckIcon, FeesIcon, ShieldIcon } from '@/icons'
import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  Button,
  HStack,
  Icon,
  Stack,
} from '@chakra-ui/react'

const Home = () => {
  return (
    <ChakraProvider>
      {/* Header Section */}
      <Box
        textAlign={{ base: 'left', md: 'center' }}
        bg={'#6B46C1'}
        height={'397px'}
        // mx={'auto'}
        pl={{ base: '23px', lg: '0' }}
        pr={{ base: '39px', lg: '0' }}
      >
        <Heading
          textColor={'white'}
          pt={{ base: '56px', md: '88px' }}
          fontWeight={800}
          fontSize={{ base: '30px', lg: '48px' }}
          lineHeight={'130%'}
          letterSpacing={'-0.01em'}
        >
          Simple pricing for your business
        </Heading>
        <Text
          textColor={'white'}
          fontWeight={'500px'}
          fontSize={{ base: '18px', lg: '24px' }}
          lineHeight={'32px'}
          opacity={'0.84'}
          letterSpacing={'-0.01em'}
          pb={{ base: '36px', lg: '0' }}
          pt={{ base: '20px', lg: '16px' }}
        >
          Plans that are carefully crafted to suit your business.
        </Text>
      </Box>

      {/* Pricing Section */}
      <Box
        display={'flex'}
        flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
        justifyContent={'center'}
        maxW={{ base: '382px', md: '550px', lg: '994px' }}
        mx={'auto'}
        mt='-150px'
        rounded={'lg'}
        overflow={'hidden'}
        boxShadow='lg'
      >
        {/* Right Box */}
        <Box
          bg='#cbb8ee'
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          // w={'378px'}
          // h={'336px'}

          maxHeight={'336px'}
          textAlign={'center'}
          my={'auto'}
          alignContent={'center'}
        >
          <Text
            mt={'57px'}
            color='#171923'
            fontWeight={'bold'}
            fontSize={'24px'}
            lineHeight={'32px'}
          >
            Premium PRO
          </Text>
          <Heading
            color='#171923'
            fontWeight={'bold'}
            fontSize={'60px'}
            letterSpacing={'-0.01em'}
            lineHeight={'100%'}
            marginTop={'16px'}
            marginBottom={'8px'}
          >
            $329
          </Heading>
          <Text
            color='#171923'
            fontWeight={'semibold'}
            fontSize={'18px'}
            // letterSpacing={'-0.01em'}
            lineHeight={'28px'}
          >
            billed just once
          </Text>
          <Button
            width={'282px'}
            height={'51px'}
            bg={'#805AD5'}
            textColor={'white'}
            marginTop={'24px'}
            pt={'3'}
            pb={'4'}
            mx={'12'}
            mb={'60px'}
          >
            Get Started
          </Button>
        </Box>
        {/* Left Box */}
        <Box bg={'white'} px={'48px'}>
          <Text
            mt={'48px'}
            fontWeight={'semibold'}
            fontSize={'18px'}
            lineHeight={'28px'}
          >
            Access these features when you get this pricing package for your
            business.
          </Text>
          <HStack mt={'24px'} mb={'15px'}>
            <CheckIcon />

            <Text fontSize={'18px'} lineHeight={'28px'} fontWeight={'400'}>
              International calling and messaging API
            </Text>
          </HStack>

          <HStack mb={'15px'}>
            <CheckIcon />
            <Text fontSize={'18px'} lineHeight={'28px'} fontWeight={'400'}>
              Additional phone numbers
            </Text>
          </HStack>

          <HStack mb={'15px'}>
            <CheckIcon />
            <Text fontSize={'18px'} lineHeight={'28px'} fontWeight={'400'}>
              Automated messages via Zapier
            </Text>
          </HStack>

          <HStack mb={'48px'}>
            <CheckIcon />
            <Text fontSize={'18px'} lineHeight={'28px'} fontWeight={'400'}>
              24/7 support and consulting
            </Text>
          </HStack>
        </Box>
      </Box>

      <Box
        textAlign={{ base: 'left', md: 'center' }}
        display={'flex'}
        flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
        justifyContent={'center'}
        w={{ base: '376px', md: '550px', lg: '906px' }}
        mx={'auto'}
        // mx={{ base: '22px', md: 'auto' }}
        mt={{ base: '33px', lg: '56px' }}
      >
        <HStack mb={{ base: '31px', lg: '0px' }}>
          <Stack>
            <ShieldIcon />
          </Stack>

          <Text fontSize={'18px'} lineHeight={'24px'} fontWeight={'bold'}>
            30 days money back Guarantee
          </Text>
        </HStack>
        <HStack my={{ base: '31px', lg: '0px' }}>
          <Stack>
            <FeesIcon />
          </Stack>

          <Text fontSize={'18px'} lineHeight={'24px'} fontWeight={'bold'}>
            No setup fees 100% hassle-free
          </Text>
        </HStack>
        <HStack my={{ base: '31px', lg: '0px' }}>
          <Stack>
            <ArrowIcon />
          </Stack>

          <Text fontSize={'18px'} lineHeight={'24px'} fontWeight={'bold'}>
            No monthly subscription Pay once and for all
          </Text>
        </HStack>
      </Box>
    </ChakraProvider>
  )
}
export default Home
