import Image from "next/image";

interface MessageBubbleProps {
  text: string;
  isSender: boolean;
}

export default function MessageBubble({ text, isSender }: MessageBubbleProps) {
  const senderURL = 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  const recieverURL = 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'

  return (
    <div className={`chat-message ${isSender ? "justify-end" : ""}`}>
      <div className={`flex items-end ${isSender ? "justify-end" : ""}`}>
        <div
          className={`mx-2 flex max-w-3xl flex-col space-y-2 text-lg ${
            isSender ? "order-1 items-end" : "order-2 items-start"
          }`}
        >
          <div>
            <span
              className={`inline-block rounded-lg px-4 py-2 text-lg ${
                isSender
                  ? "rounded-br-none bg-blue-600 text-white"
                  : "rounded-bl-none bg-gray-300 text-gray-600"
              }`}
            >
              {text}
            </span>
          </div>
        </div>
        <Image
          height={24}
          width={24}
          src={isSender ? senderURL : recieverURL}
          alt="Profile"
          className={`${isSender ? 'order-2' : 'order-1'} h-10 w-10 rounded-full`}
        />
      </div>
    </div>
  );
}
