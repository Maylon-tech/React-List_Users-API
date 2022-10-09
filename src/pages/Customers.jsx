import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid'

import CustomersCard from '../components/CustomersCard'

const Customers = () => {
    const [customers, setCustomers] = useState([])

    console.log(customers)

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                const { data } = response.data

                setCustomers(data)
            })
    }, [])


  return (
    <Grid container alignItems='center' sx={{gap: 7, width:800}}>
        {
          customers.map(item => (
            <Grid item xs={12} md={4} lg={3} sx={{}}>
              <CustomersCard 
                name={item.first_name}
                lastname={item.last_name}
                email={item.email}
                avatar={item.avatar}                
              />
            </Grid>
          ))
        }
    </Grid>
  
  )
}

export default Customers