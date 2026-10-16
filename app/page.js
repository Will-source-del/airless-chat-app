
"use client";

import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([
    { name: "Alex", text: "Welcome to Airless! 👋" },
    { name: "Jamie", text: "Your new community starts here." }
  ]);
  const [draft, setDraft] = useState("");

  function sendMessage(event) {
    event.preventDefault();
    if (!draft.trim()) return;
    setMessages([...messages, { name: "You", text: draft.trim() }]);
    setDraft("");
  }

  return (
    <main className="layout">
      <aside className="servers">
        <div className="logo">A</div>
        <button>🎮</button>
        <button>🎨</button>
        <button>＋</button>
      </aside>

      <aside className="sidebar">
        <h2>Airless</h2>
        <input placeholder="Search Airless..." />
        <p className="label">YOUR SPACE</p>
        <button>♧ Friends</button>
        <button>✉ Direct messages</button>
        <p className="label">TEXT CHANNELS</p>
        <button className="selected"># general</button>
        <button># introductions</button>
        <button># random</button>
        <button># media</button>
        <div className="profile">
          <div className="avatar">W</div>
          <div><strong>You</strong><small>Online</small></div>
        </div>
      </aside>

      <section className="chat">
        <header><span>#</span><strong>general</strong></header>
        <div className="welcome">
          <div className="hash">#</div>
          <h1>Welcome to Airless</h1>
          <p>Your space, your people. Start a conversation.</p>
        </div>
        <div className="messages">
          {messages.map((message, index) => (
            <article className="message" key={index}>
              <div className="avatar">{message.name[0]}</div>
              <div><strong>{message.name}</strong><p>{message.text}</p></div>
            </article>
          ))}
        </div>
        <form className="composer" onSubmit={sendMessage}>
          <input
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Message #general..."
            aria-label="Write a message"
          />
          <button type="submit" disabled={!draft.trim()}>➤</button>
        </form>
        <p className="note">Airless preview · Messages are temporary</p>
      </section>

      <aside className="members">
        <p className="label">ONLINE — 3</p>
        {["Alex", "Jamie", "You"].map((name) => (
          <div className="person" key={name}>
            <div className="avatar">{name[0]}</div>
            <strong>{name}</strong>
            <span className="online" />
          </div>
        ))}
        <div className="invite">
          <h3>Your space, your people.</h3>
          <p>Bring your friends together on Airless.</p>
          <button onClick={() => alert("Invites are coming soon!")}>Invite friends</button>
        </div>
      </aside>
    </main>
  );
}
