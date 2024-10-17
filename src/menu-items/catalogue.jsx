import { BallotOutlined, ContentPasteGoOutlined } from '@mui/icons-material';

const icons = {
    BallotOutlined,
    ContentPasteGoOutlined
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
        },
        {
            id: 'order',
            title: 'Đơn hàng',
            type: 'item',
            url: '/admin/orders',
            icon: icons.ContentPasteGoOutlined,
        },
    ]
};

export default catalogue;