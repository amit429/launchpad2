import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, HStack, Input, Select, Stack, Text, VStack } from "@chakra-ui/react";

import { useState } from "react";
import Roles from "../../classes/roles";
import InputField from "../InputField/InputField";
import { motion, Variants } from "framer-motion";

const R2LAnimate = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: { x: 0, transition: { duration: 1 }, opacity: 1 },
}


const EntryLevelForm = ({ title, subtitle, chooseRole, onSubmit }) => {
    const [firstName, setFirstName] = useState('');
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const [lastName, setLastName] = useState('');
    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const [email, setEmail] = useState('');
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const [phoneNumber, setPhoneNumber] = useState('');
    const handlePhoneNumber = (e) => {
        isNaN(parseInt(e.target.value)) ? setPhoneNumber('') :
            setPhoneNumber(e.target.value);
    }


    return (
        <motion.div
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{ once: true, amount: 0.5 }}
        variants={R2LAnimate}
        >
        <Stack
            bg={'gray.50'}
            height={'min-content'}
            alignSelf={'center'}
            rounded={'xl'}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: 'lg' }}>
            <Stack spacing={4}>
                <Heading
                    color={'gray.800'}
                    lineHeight={1.1}
                    fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                    {title}
                    <Text
                        as={'span'}
                        variant={'orange'}
                    >
                        !
                    </Text>
                </Heading>
                <Text variant={'subtitle'}>
                    {subtitle}
                </Text>
            </Stack>
            <Select onChange={chooseRole}>
                <option >{Roles.INVESTOR}</option>
                <option >{Roles.STARTUP_FOUNDER}</option>
            </Select>


            <Box as={'form'} mt={10} onSubmit={onSubmit}>
                <Stack spacing={4}>
                    <HStack>
                        <InputField
                            id={'first-name'}
                            required={true}
                            type={'text'}
                            inputMode={'text'}
                            label={'First Name'}
                            placeholder={'John'}
                            error={''}
                            isError={false}
                            value={firstName}
                            onChange={handleFirstName}
                        />
                        <InputField
                            id={'last-name'}
                            required={true}
                            type={'text'}
                            inputMode={'text'}
                            label={'Last Name'}
                            placeholder={'Stone'}
                            error={''}
                            isError={false}
                            value={lastName}
                            onChange={handleLastName}
                        />
                    </HStack>
                    <InputField
                        id={'email'}
                        required={true}
                        type={'email'}
                        inputMode={'email'}
                        label={'E-Mail Address'}
                        placeholder={'example@domain.com'}
                        error={'Enter a valid email address.'}
                        isError={(email.length > 0 && !email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i))}
                        value={email}
                        onChange={handleEmail}
                    />

                    <InputField
                        id={'phone-number'}
                        required={true}
                        type={'tel'}
                        inputMode={'tel'}
                        label={'Phone Number'}
                        placeholder={'+91 000 000 0000'}
                        error={'Enter 10-digit phone number.'}
                        isError={(phoneNumber.length > 0 && !phoneNumber.match(/^[0-9]{10}$/))}
                        value={phoneNumber}
                        onChange={handlePhoneNumber}
                    />

                </Stack>
                <Button
                    variant={'submit'}
                    type={'submit'}
                    onSubmit={(e) => onSubmit(e)}
                >
                    Submit
                </Button>
            </Box>
        </Stack>
        </motion.div>


    );
}


export default EntryLevelForm;