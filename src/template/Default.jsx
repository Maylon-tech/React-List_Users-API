import { Container } from '@mui/material'
import Header from '../partials/Header/Header'

const Default = ({ children }) => {
    return (
        <>
            <Header />
            <Container maxWidth="sm" sx={{ background:"green", border: "2px solid red", height:"90vh"}}>
                { children }
            </Container>
            
        </>
    )
}

export default Default