import React, { Component } from 'react'
import PropTypes from 'prop-types'

import InfiniteCardListPerformance from '../components/InfiniteCardListPerformance'
import Header from '../components/Header'

class Home extends Component {
    static propTypes = {
        messages: PropTypes.array.isRequired,
        onAddMessages: PropTypes.func.isRequired,
        onRemoveMessage: PropTypes.func.isRequired,
        isInfiniteScrollActivated: PropTypes.bool.isRequired,
    }

    render() {
        const {
        	messages,
        	onAddMessages,
            onRemoveMessage,
            isInfiniteScrollActivated
        } = this.props

        return (
        	<div className='Page'>
	            <Header title='Messages' />

		        <div className='container'>
		        	<div className='container__wrapper'>
                        <InfiniteCardListPerformance
                            messages={messages}
                            isInfiniteScrollActivated={isInfiniteScrollActivated}
                            onAddMessages={onAddMessages}
                            onRemoveMessage={onRemoveMessage}
                        />
		          	</div>
		        </div>
	        </div>
        )
    }
}


// <InfiniteCardList
//    messages={messages}
//    onRemoveMessage={onRemoveMessage}
//    onAddMessages={onAddMessages}
///>

export default Home
