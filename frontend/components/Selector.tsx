import React from 'react';
import {
    Flex, FormControl, FormLabel, Button, Select
} from '@chakra-ui/react';

export const Selector = (props: any) => (
    <Flex width="100%" direction="row" justify="center">
        <Flex width="100%" direction="column" justify="center">
            <FormControl>
                <FormLabel>{props.label}</FormLabel>
                <Select placeholder={props.placeholder} onChange={props.onChange} value={props.value}>
                    {
                        props.opts.map((x: any) => <option value={x}>{x}</option>)
                    }
                </Select>
            </FormControl>   
            <div>
            <Button
                mt={4}
                colorScheme="teal"
                isLoading={false}
                onClick={props.onPrev}
                m="5"
            >
                Previous
            </Button>
            <Button
                mt={4}
                colorScheme="teal"
                isLoading={false}
                onClick={props.onNext}
                m="5"
            >
                Next
            </Button> 
            </div>
        </Flex>
        
    </Flex>
)


export const ThemeSelector = (props: any) => <Selector
    label="theme" 
    placeholder="select a theme"
    opts={["plain", "default"]}
    onPrev={props.onPrev}
    onNext={props.onNext}
    onChange={props.onChange} 
    value={props.value} />
