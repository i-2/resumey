import React from 'react';
import {
    Flex, Text
} from '@chakra-ui/react';
import { Component } from 'react';

export interface WizardItem {
    title: string,
    component: Component
}

export interface WizardProps {
    tabs: WizardItem[]
}

export const Wizard = (props: WizardProps) => (
    <Flex width="100%" borderRadius="50" m="5" justify="center" direction="column">
        {
            props.tabs.map((x: WizardItem) => (
                <Flex justify="center" direction="column">
                    <Flex direction="row" justify="center">
                        <Text fontSize="3xl"> {x.title} </Text>
                    </Flex>
                    <Flex width="100%" direction="row" justify="center">
                        {x.component}
                    </Flex>
                </Flex>
            ))
        }
    </Flex>
)

