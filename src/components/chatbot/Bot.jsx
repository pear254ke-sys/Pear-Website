import { useState } from "react"
import "./bot.css"
import image from "../../assets/player.png"

function Bot() {
    const [open, setOpen] = useState(false)
    const [messages, setMessages] = useState([
        {
            text: "Hello! I'm your assistant 👋\n\nI'm here to help you with:\n• Account registration\n• Job application process\n• Dashboard navigation\n• Technical support\n• Requirements and deadlines\n\nHow can I assist you today?",
            sender: "bot"
        }
    ])
    const [input, setInput] = useState("")

    const suggestions = [
        "How do I register?",
        "Application process",
        "Dashboard help",
        "Technical support"
    ]

    function sendMessage(text = input) {
        if (!text.trim()) return

        const userMsg = { text, sender: "user" }
        setMessages(prev => [...prev, userMsg])
        setInput("")

        setTimeout(() => {
            setMessages(prev => [
                ...prev,
                { text: "Working on: " + text, sender: "bot" }
            ])
        }, 500)
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
                        {suggestions.map((s, i) => (
                            <button key={i} onClick={() => sendMessage(s)}>
                                {s}
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