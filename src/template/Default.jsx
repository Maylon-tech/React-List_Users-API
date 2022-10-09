import { Container } from '@mui/material'
import Header from '../partials/Header/Header'

const Default = ({ children }) => {
    return (
        <>
            <Header />
            <Container maxWidth="sm">
                { children }
            </Container>
            
        </>
    )
}

export default Default