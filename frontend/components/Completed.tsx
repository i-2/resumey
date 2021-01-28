import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import * as actionCreators from '../actions';

export const _Completed = (props: any) => {
    const { hasPublished, urlLink } = props.publish;
    const onPublish = () => props.tryPublish();
    return (
        <Flex width="100%" direction="column" justify="center" borderWidth="1px" borderRadius="lg" padding="5%" marginTop="2%">
            <Flex width="100%" direction="row" justify="center" padding="5%" marginTop="2%"><Heading>  Almost Complete! </Heading> </Flex>
            {
                !hasPublished ? <Flex width="100%" direction="row" justify="center" padding="5%" marginTop="2%"><Button colorScheme="teal" onClick={onPublish}> Publish Now </Button></Flex> :
                    <Flex width="100%" direction="row" justify="center" padding="5%" marginTop="2%">
                        <a href={urlLink}>
                            <Text>{urlLink}</Text>
                        </a>
                    </Flex>
            }
        </Flex>
    )
}

const mapStateToProps = (state: any) => ({
    publish: state.publish
})
const mapDispatchToProps = (dispatch: any) => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(_Completed);