import { useState } from "react"
import "./bot.css"
import image from "../../assets/player.webp"

function Bot() {
    const [open, setOpen] = useState(false)
    const [messages, setMessages] = useState([
        {
            text: "Hi am you Pear assistant,how do i help you",
            sender: "bot"
        }
    ])
    const [input, setInput] = useState("")

    const suggestions = [
{key:"what is pear",value:"We are an organization"}
    ]

    function sendMessage(text = input) {
        if (!text.trim()) return

        const userMsg = { text, sender: "user" }
        setMessages(prev => [...prev, userMsg])
        setInput("")

        setTimeout(() => {
            setMessages(prev => [
                ...prev,
                { text: "  " + text, sender: "bot" }
            ])
        }, 1000)
    }

    return (
        <section className="bot-container">

            {open && (
                <div className="chat-container">

                    {/* HEADER */}
                    <div className="chat-header">
                        <div className="header-left">
                            <div className="logo">🤖</div>
                            <div>
                                <h3>Assistant</h3>
                                <span>AI Powered</span>
                            </div>
                        </div>

                        <button className="close-btn" onClick={() => setOpen(false)}>✕</button>
                    </div>

                    <div className="messages">
                        {messages.map((msg, i) => (
                            <div key={i} className={`message ${msg.sender}`}>
                                {msg.text.split("\n").map((line, idx) => (
                                    <div key={idx}>{line}</div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="suggestions">
                        {suggestions.map((obj) => (
                            <button onClick={() => sendMessage(obj.value)}>
                                {obj.key}
                            </button>
                        ))}
                    </div>

                    {/* INPUT */}
                    <div className="input-area">
                        <input
                            placeholder="Ask something..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        />
                        <button onClick={() => sendMessage()}>➤</button>
                    </div>
                </div>
            )}

            {!open && (
                <img
                    className="pear-btn"
                    src={image}
                    onClick={() => setOpen(true)}
                    alt="bot"
                />
            )}
        </section>
    )
}

export default Bot