# Monologue Simulator

## Live demo: [Step into your own conversation ✨](YOUR_PUBLIC_LANDING_PAGE_URL)

What if your thoughts had a chat room of their own? Inspired by Slack layout, this playful little simulator lets you give your inner voices the floor, switch between two color-coded users, and watch each thought join the conversation. 🗣️💬

## How it works

- Choose **User one** or **User two** to set the color of your next message.
- Write a thought and select **Submit** or hit ENTER key to add it to the conversation.
- Messages live in React state while the app is open; there’s no account or backend.
- The chat output scrolls to keep the latest message in view.

## Stack

- ⚛️ React 19 and JSX
- ⚡ Vite for development and production builds
- 🎨 Bootstrap 5 and React-Bootstrap for layout and UI

## Project map

```text
src/
├── App.jsx                  # Page layout: header, sidebar, and chat
├── main.jsx                 # React entry point and Bootstrap styles
├── components/
│   ├── Header/              # Slack-style menu, search, and profile
│   ├── Sidebar/             # Icon navigation with tooltips
│   └── Chat/
│       ├── Chat.jsx         # Message and user-selection state
│       ├── Input/           # Message form and user selector
│       └── OutputArea/      # Scrollable message list and message cards
└── assets/                  # Sidebar and Slack-style icons
```

## Run locally

```bash
npm install
npm run dev
```
