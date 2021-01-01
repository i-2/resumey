import React from 'react';
import {
    Flex, Text
} from '@chakra-ui/react';
import { Component } from 'react';
import { ProgressBar } from './ProgressBar';
import Completed from './Completed';



export interface WizardItem {
    title: string,
    component: Component
}

export interface WizardProps {
    tabs: WizardItem[]
    count: number
}

export const Wizard = (props: WizardProps) => {
    if (props.count < props.tabs.length) {
        const X = props.tabs[props.count];
    }
    else {
        const X = { "title": "Completed", "component": <Completed /> }
    }
    const percentage = Math.floor((props.count / props.tabs.length) * 100);
    return (
        <Flex width="100%" borderRadius="50" m="5" justify="center" direction="column">
            <Flex w="100%" justify="center">
                <ProgressBar value={percentage} />
            </Flex>
            {
                <Flex justify="center" direction="column">
                    <Flex direction="row" justify="center">
                        <Text fontSize="3xl"> {X.title} </Text>
                    </Flex>
                    <Flex width="100%" direction="row" justify="center">
                        {X.component}
                    </Flex>
                </Flex>

            }
        </Flex>
    )
}




