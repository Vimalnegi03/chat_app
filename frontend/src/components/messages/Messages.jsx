import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
	const { messages, loading } = useGetMessages();
	useListenMessages();
	const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

	return (
		<div className='px-4 flex-1 overflow-auto sm:px-6 md:px-8 lg:px-10'>
			{!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} ref={lastMessageRef} className="mb-2 sm:mb-3">
						<Message message={message} />
					</div>
				))}

			{loading && [...Array(3)].map((_, idx) => (
				<MessageSkeleton key={idx} className="mb-2 sm:mb-3" />
			))}
			{!loading && messages.length === 0 && (
				<p className='text-center text-sm sm:text-base'>Send a message to start the conversation</p>
			)}
		</div>
	);
};
export default Messages;
