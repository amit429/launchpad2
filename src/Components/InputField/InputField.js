import { FormControl, FormErrorMessage, FormLabel, Input, VStack } from "@chakra-ui/react"

const InputField = ({ id, label, type, inputMode, value, onChange, placeholder, error, required, isError }) => {

    return (<VStack alignItems={'flex-start'}>
        <FormControl isRequired={required} isInvalid={isError} onSubmit={(e) => e.preventDefault()} >
            <FormLabel>{label}</FormLabel>
            <Input type={type} inputMode={inputMode} placeholder={placeholder} id={id} value={value} onChange={onChange} />
            <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
    </VStack >)
}

export default InputField;
