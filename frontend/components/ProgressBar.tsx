import React from 'react';
import { Box, Progress, Flex, Spacer } from '@chakra-ui/react';
import { QuestionOutlineIcon } from '@chakra-ui/icons';

export interface ProgressBarProps {
    value: number,
}

export const ProgressBar = (props: ProgressBarProps) => (
    <Box width="inherit" borderRadius="50" m="5" centerContent>
        <Flex>
            <Box p="1">
                Completion : {props.value}%
            </Box>
            <Spacer />
            <Box p="1" as="button" >
                <QuestionOutlineIcon w={6} h={6} />
            </Box>
        </Flex>
        <Progress value={props.value} size="xs" colorScheme="green" isAnimated />
    </Box>
)