import React, { Component } from 'react'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost'

const MESSAGE_QUERY = gql`
    query getAllMessages {
        getAllMessages {
        content
        senderName
    }
    }
`;

function MessageListWithData() {
    const { subscribeToMore, ...result }  = useQuery(
        MESSAGE_QUERY,
    );
    console.log("result", result)
    return <p>rwgrwgrg</p>
}

export default MessageListWithData;