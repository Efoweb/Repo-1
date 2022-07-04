# Alchemy_P2_Api
## Overview 
Alchemy will build a fullstack application with this serving as the backend portion of the project. The api portion will handle many of the CRUD operations and will handle the task of establishing a connection to the database.

## User Stories
- [ ] NonUsers can create an account and login
- [ ] Signed in users can view the leaderboard
- [ ] Signed in users can view which game they what to play
- [ ] Select Game
- [ ] Players can pick difficulty(easy, medium, hard)
- [ ] Players can upgrade account to play second game
- [ ] Players type in chat while playing
- [ ] Players can quit game
- [ ] Players can win tokens after winning games
- [ ] Players can level up in games

## Stretch Goals
- [ ] Reward Nth user (100th player get a free level up)
- [ ] Track players best game to display on profile

## Data Tables
### Leaderboard
- Leaderboard Rank
- Username
- Score

### Users
- Admin/Employee/Player
- Username
- Password
- AuthToken

### Player Profile
- Id (to tack total players)
- Name
- Username
- CurrentLevel
- Total Tokens
- Best Game
