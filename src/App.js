<<<<<<< HEAD
import './App.css';
import PostForm from './PostForm';
import PostList from './PostList';

function App() {
    return (
        <div className='App'>
            <PostForm />
            <PostList />
=======
import { Typography, Divider } from 'antd';
import './App.css';
import TodoList from './components/TodoList';
import Filters from './components/Filters';

const { Title } = Typography;

function App() {
    return (
        <div
            style={{
                width: 500,
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'white',
                padding: 20,
                boxShadow: '0 0 10px 4px #bfbfbf',
                borderRadius: 5,
                height: '90vh',
            }}
        >
            <Title style={{ textAlign: 'center' }}>TODO APP with REDUX</Title>
            <Filters />
            <Divider />
            <TodoList />
>>>>>>> 0cb179dddee2908fb5251e548beeb38b4fe182ec
        </div>
    );
}

export default App;
