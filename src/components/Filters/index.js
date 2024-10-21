import { Col, Input, Radio, Row, Select, Tag, Typography } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import filtersSlice from './filtersSlice';

const { Search } = Input;

export default function Filters() {
    const [searchText, setSearchText] = useState('');
    const [status, setStatus] = useState('All');
    const [priorities, setPriorities] = useState([]);

    const dispatch = useDispatch();

    const handleChangeSearchText = (e) => {
        setSearchText(e.target.value);
        dispatch(filtersSlice.actions.searchTextChange(e.target.value));
    };

    const handleChangeStatus = (e) => {
        setStatus(e.target.value);
        dispatch(filtersSlice.actions.statusChange(e.target.value));
    };

    const handleChangePriority = (value) => {
        setPriorities(value);
        dispatch(filtersSlice.actions.prioritiesChange(value));
    };

    return (
        <Row justify='center'>
            <Col span={24}>
                <Typography.Paragraph
                    style={{
                        fontWeight: 'bold',
                        marginBottom: 3,
                        marginTop: 10,
                    }}
                >
                    Search
                </Typography.Paragraph>
                <Search
                    placeholder='input search text'
                    value={searchText}
                    onChange={handleChangeSearchText}
                />
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{
                        fontWeight: 'bold',
                        marginBottom: 3,
                        marginTop: 10,
                    }}
                >
                    Filter By Status
                </Typography.Paragraph>
                <Radio.Group value={status} onChange={handleChangeStatus}>
                    <Radio value='All'>All</Radio>
                    <Radio value='Completed'>Completed</Radio>
                    <Radio value='Todo'>To do</Radio>
                </Radio.Group>
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{
                        fontWeight: 'bold',
                        marginBottom: 3,
                        marginTop: 10,
                    }}
                >
                    Filter By Priority
                </Typography.Paragraph>
                <Select
                    mode='multiple'
                    allowClear
                    placeholder='Please select'
                    style={{ width: '100%' }}
                    value={priorities}
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
            </Col>
        </Row>
    );
}
