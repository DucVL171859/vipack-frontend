import { BallotOutlined } from '@mui/icons-material';

const icons = {
    BallotOutlined
};

const catalogue = {
    id: 'group-catalogue',
    title: 'Danh mục',
    type: 'group',
    children: [
        {
            id: 'blogs',
            title: 'Blogs',
            type: 'item',
            url: '/admin/blogs',
            icon: icons.BallotOutlined,
        }
    ]
};

export default catalogue;