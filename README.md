# IPL Voting Leaderboard

A real-time interactive voting platform where users can support their favorite IPL teams. The leaderboard updates dynamically every 10 minutes, providing an engaging experience for users. Built with modern web technologies to ensure fast, scalable, and SEO-friendly performance.

## Features
- **Real-Time Updates:** Live leaderboard updates using WebSockets (Socket.io).
- **Fast Data Access:** Utilizes Redis for temporary and high-speed data storage.
- **SEO Optimization:** Built with Next.js for server-side rendering and improved search engine visibility.
- **API Handling:** Robust backend powered by Node.js and Express.js for seamless API management.
- **Simple Voting Rule:** Users can visit the website once to cast their vote or show support for their favorite IPL team.

## Technologies Used
- **Frontend:** Next.js (for SSR and SEO optimization)
- **Backend:** Node.js, Express.js
- **Real-Time Communication:** WebSockets (Socket.io)
- **Caching & Temporary Storage:** Redis
- **Deployment:** *(Add your deployment platform, e.g., Vercel, AWS, etc.)*

## How It Works
1. Users visit the website and cast their vote for their preferred IPL team.
2. Votes are temporarily stored in Redis for fast access and real-time updates.
3. The leaderboard updates dynamically every 10 minutes, reflecting the current voting trends.
4. Real-time updates are pushed to all connected clients using WebSockets.
5. The platform ensures a seamless and engaging user experience with minimal latency.

![Screenshot (7)](https://github.com/user-attachments/assets/c2163c41-7a51-403d-a8da-894f4dab04f4)


## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/ad-gupta/live-leaderboard.git
    ```
2. Navigate to the project directory:
    ```bash
    cd live-leaderboard
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add the following variables:
        ```plaintext
        REDIS_HOST=your_redis_url
        REDIS_PORT=your_redis_port
        REDIS_PASSWORD=your_redis_password
        ```
5. Start the development server:
    ```bash
    npm run dev
    ```
