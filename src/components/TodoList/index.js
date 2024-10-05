import { Col, Row, Input, Button, Select, Tag, Space } from 'antd';
import Todo from '../Todo';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import todosSlice from './todosSlice';
import { v4 as uuidv4 } from 'uuid';
import { todosRemainingSelector } from '../redux/selectors';

export default function TodoList() {
    const [todoName, setTodoName] = useState('');
    const [priority, setPriority] = useState('Medium');

    const dispatch = useDispatch();
    const todoList = useSelector(todosRemainingSelector);

    const handleChangeInput = (e) => {
        setTodoName(e.target.value);
    };
    const handleAddTodo = () => {
        dispatch(
            todosSlice.actions.addTodo({
                id: uuidv4(),
                name: todoName,
                priority: priority,
                completed: false,
            })
        );
        setTodoName('');
        setPriority('Medium');
    };

    const handleChangePriority = (value) => {
        setPriority(value);
    };
    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col
                span={24}
                style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}
            >
                {todoList.map((todo) => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        name={todo.name}
                        priority={todo.priority}
                        completed={todo.completed}
                    />
                ))}
            </Col>
            <Col span={24}>
                <Space.Compact style={{ display: 'flex' }}>
                    <Input value={todoName} onChange={handleChangeInput} />
                    <Select
                        defaultValue='Medium'
                        value={priority}
                        onChange={handleChangePriority}
                    >
                        <Select.Option value='High' label='High'>
                            <Tag color='red'>High</Tag>
                        </Select.Option>
                        <Select.Option value='Medium' label='Medium'>
                            <Tag color='blue'>Medium</Tag>
                        </Select.Option>
                        <Select.Option value='Low' label='Low'>
                            <Tag color='gray'>Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button onClick={handleAddTodo} type='primary'>
                        Add
                    </Button>
                </Space.Compact>
            </Col>
        </Row>
    );
}
