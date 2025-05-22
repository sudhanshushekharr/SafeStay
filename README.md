# CodeProfile Hub 🚀

A unified platform to showcase your coding journey across multiple platforms and stay updated with coding contests. Inspired by Codolio's beautiful portfolio approach, with added features for competitive programming.

## 🌟 Features

### Profile Aggregation
- **Multi-Platform Integration**
  - LeetCode profile and statistics
  - CodeForces ratings and submissions
  - GitHub contributions and repositories
  - More platforms coming soon!

- **Unified Dashboard**
  - Total problems solved across platforms
  - Coding activity timeline
  - Skill level indicators
  - Achievement badges
  - Progress tracking

- **Portfolio Features** (Inspired by Codolio)
  - Beautiful stats cards for each platform
  - Activity heatmap across all platforms
  - Language proficiency radar charts
  - Project showcase with live demos
  - Skills and technologies section
  - Customizable themes and layouts
  - Social media integration

### Contest Management
- **Contest Calendar**
  - Upcoming coding contests
  - Platform-wise filtering
  - Difficulty level indicators
  - Registration links
  - Contest reminders

- **Contest Analytics**
  - Past contest performance
  - Rating changes
  - Problem-solving statistics
  - Platform-wise rankings

### Portfolio Customization
- **Theme Options**
  - Light/Dark mode
  - Custom color schemes
  - Layout variations
  - Component ordering

- **Content Sections**
  - About me
  - Skills showcase
  - Project gallery
  - Coding journey timeline
  - Achievement wall
  - Blog/Articles section

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Redux/Context API
- React Query
- React Router
- Chart.js/D3.js

### Backend
- Node.js
- Express.js
- MongoDB
- Redis (for caching)

### APIs & Integrations
- GitHub API
- LeetCode GraphQL API
- CodeForces API
- Calendar API

## 📋 Project Structure
```
coding-profile-hub/
├── client/                 # Frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/        # Main pages
│   │   ├── features/     # Feature-specific components
│   │   ├── services/     # API services
│   │   └── utils/        # Helper functions
└── server/                # Backend
    ├── controllers/      # Route controllers
    ├── models/          # Database models
    ├── routes/          # API routes
    └── services/        # Business logic
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Redis (optional, for caching)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/coding-profile-hub.git
cd coding-profile-hub
```

2. Install dependencies
```bash
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

3. Set up environment variables
```bash
# In server directory
cp .env.example .env
# Fill in your environment variables
```

4. Start the development servers
```bash
# Start backend server
cd server
npm run dev

# Start frontend server
cd client
npm run dev
```

## 📱 Key Features Implementation

### User Profile
```javascript
const UserProfile = {
  personalInfo: {
    name: string,
    email: string,
    profilePicture: string,
    bio: string,
    socialLinks: {
      github: string,
      linkedin: string,
      twitter: string
    }
  },
  platformStats: {
    leetcode: {
      totalSolved: number,
      rating: number,
      recentSubmissions: [],
      activityHeatmap: []
    },
    codeforces: {
      rating: number,
      rank: string,
      solvedProblems: number,
      contestHistory: []
    },
    github: {
      repositories: number,
      contributions: number,
      topLanguages: [],
      activityHeatmap: []
    }
  },
  portfolio: {
    theme: {
      mode: 'light' | 'dark',
      primaryColor: string,
      layout: string
    },
    sections: {
      about: string,
      skills: string[],
      projects: Project[],
      achievements: Achievement[]
    }
  }
}
```

### Contest Management
```javascript
const Contest = {
  id: string,
  name: string,
  platform: string,
  startTime: Date,
  duration: number,
  type: string,
  difficulty: string,
  registrationLink: string,
  description: string
}
```

## 🔄 API Integration Examples

### LeetCode API
```javascript
const LEETCODE_API_ENDPOINT = 'https://leetcode.com/graphql';

const userProfileQuery = `
  query userProfile($username: String!) {
    matchedUser(username: $username) {
      username
      profile {
        realName
        ranking
        reputation
      }
      submitStats {
        acSubmissionNum {
          difficulty
          count
        }
      }
    }
  }
`;
```

### GitHub API
```javascript
const GITHUB_API_ENDPOINT = 'https://api.github.com/users/';

const fetchGitHubProfile = async (username) => {
  const response = await fetch(`${GITHUB_API_ENDPOINT}${username}`);
  return response.json();
};
```

## 📈 Future Enhancements

1. **Additional Platforms**
   - HackerRank integration
   - AtCoder integration
   - CodeChef integration

2. **Advanced Features**
   - Real-time coding activity
   - Problem recommendation system
   - Custom coding challenges
   - Team formation for contests

3. **Community Features**
   - User rankings
   - Discussion forums
   - Code sharing
   - Mentorship program

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- LeetCode for their GraphQL API
- GitHub for their comprehensive API
- CodeForces for their contest data
- All the open-source libraries used in this project

## 📞 Support

For support, email your-email@example.com or open an issue in the repository.

---

Made with ❤️ by [Your Name]
