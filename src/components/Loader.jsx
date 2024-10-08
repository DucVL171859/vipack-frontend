import { LinearProgress, styled } from "@mui/material";

const LoaderWrapper = styled('div')(({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 2003,
    width: '100%',
    '& > * + *': { marginTop: theme.spacing(2) }
}));

const Loader = () => (
    <LoaderWrapper>
        <LinearProgress color="primary" />
    </LoaderWrapper>
);

export default Loader;