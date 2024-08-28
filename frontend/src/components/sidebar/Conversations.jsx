import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = () => {
	const { loading, conversations } = useGetConversations();
	return (
		<div className='py-2 flex flex-col overflow-auto sm:py-4 md:py-6 lg:py-8'>
			{conversations.map((conversation, idx) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					emoji={getRandomEmoji()}
					lastIdx={idx === conversations.length - 1}
					className="px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4"
				/>
			))}

			{loading ? (
				<span className='loading loading-spinner mx-auto my-4 sm:my-6 md:my-8 lg:my-10'></span>
			) : null}
		</div>
	);
};
export default Conversations;
