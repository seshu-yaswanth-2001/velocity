# Velocity

**Velocity** is a high-performance, real-time project management suite designed for modern engineering teams. It integrates the structured task tracking of Jira with the instant communication of Slack, powered by a custom real-time synchronization engine.

Built with the **MERN Stack** (MongoDB, Express, React, Node.js) and **Socket.io**, Velocity demonstrates advanced full-stack architecture, event-driven design, and data-driven analytics.

---

## 🚀 Key Features

### 1. Real-Time Kanban Engine (The "Jira" Core)
- **Dynamic Board**: Instant drag-and-drop task management across customizable columns.
- **Optimistic UI**: Zero-latency interactions with background synchronization and automatic conflict resolution.
- **Rich Task Metadata**: Support for sub-tasks, priority levels, and file attachments.

### 2. Collaborative Pulse (The "Slack" Integration)
- **Project-Specific Channels**: Dedicated real-time chat rooms for every workspace.
- **Contextual Mentions**: Instant notifications triggered by `@user` tagging using a custom event-driven notification system.
- **Presence Awareness**: Real-time indicators showing who is online and active in the workspace.

### 3. Insight Dashboard (The "Analytics" Layer)
- **Velocity Tracking**: Visualized bar charts showing team throughput and task completion rates.
- **Workload Distribution**: Data-driven insights into team capacity and bottleneck identification using MongoDB Aggregation Pipelines.
- **Interactive Charts**: Responsive data visualizations built with Recharts.

---

## 🛠️ Technical Stack

- **Frontend**: React (Vite), TypeScript, Tailwind CSS, Framer Motion.
- **Backend**: Node.js, Express, TypeScript.
- **Real-time**: Socket.io (Custom Room-based Architecture).
- **Database**: MongoDB (Mongoose ODM).
- **State Management**: Zustand / React Query.
- **Authentication**: JWT with HTTP-only Cookies.

---

## 🏗️ Architecture Highlights

- **Event-Driven Design**: Custom Socket.io middleware for JWT authentication and project-based room isolation.
- **Scalable Schema**: Optimized NoSQL document structure for high-frequency read/write operations.
- **Security First**: Granular Role-Based Access Control (RBAC) ensuring data isolation between projects.
- **Performance**: Memoized data aggregation for complex analytics to ensure a smooth 60fps UI experience.

---

## 🚦 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (Local or Atlas)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/seshu-yaswanth-2001/velocity.git
   ```
2. Install dependencies for both Client and Server:
   ```bash
   npm install
   ```
3. Set up environment variables in `.env`:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_secret_key
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

---

## 👨‍💻 Author
**Seshu Yaswanth** - Software Engineer - 
"Building scalable systems that bridge the gap between communication and productivity."
