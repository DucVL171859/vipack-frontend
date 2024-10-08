import { Box, Typography } from "@mui/material";

const BlogContent = ({ content, imgURL }) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}
        >
            <img
                src={imgURL}
                alt="Blog"
                style={{
                    width: '100%',
                    height: 'auto',
                    marginBottom: '16px'
                }}
            />
            <Typography variant="body1" sx={{ textAlign: 'center', width: '100%' }}>
                {content}
            </Typography>
        </Box>
    );
}

export default BlogContent;