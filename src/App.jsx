import Profile from './components/Profile';
// import Statistics from 'components/Statistics';
import user from './user.json';
// import data from './data.json';

export default function App() {
  return (
    <div>
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
}
