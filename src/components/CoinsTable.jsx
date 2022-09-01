import { createTheme, LinearProgress, Table, TableCell, TableContainer, TableHead, TableBody, TableRow, TablePagination, TextField, ThemeProvider, Typography } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import millify from 'millify';
import React, { useEffect, useState } from 'react'
import { CoinList } from '../config/api';
import { CryptoState } from '../CryptoContext';

const CoinsTable = () => {
    // State for Pagination
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    // States for fetching ,storing and searching data
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");

    // Using Context api for currency
    const { currency, symbol } = CryptoState()

    // Fetching coins
    const fetchCoins = async () => {
        setLoading(true);
        const { data } = await axios.get(CoinList(currency));

        setCoins(data);
        setLoading(false);
    }

    // Use effect to fetch the coins
    useEffect(() => {
        fetchCoins();
    }, [])

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            mode: "dark",
        }
    })

    const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <ThemeProvider theme={darkTheme}>
            <Container>
                <Typography variant='h4' style={{ margin: 18, fontFamily: "Roboto" }}>
                    Cryptocurrency Prices by Market Cap
                </Typography>

                <TextField
                    label="Search for a Crypto Currency"
                    variant='outlined'
                    style={{ marginBottom: 20, width: "100%" }}
                    onChange={(e) => handleChange(e)} />

                <TableContainer>
                    {
                        loading ? (
                            <LinearProgress style={{ backgroundColor: "gold" }} />
                        ) : (
                            <Table>
                                <TableHead style={{ backgroundColor: "#EEBC1D" }}>
                                    <TableRow>
                                        {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                                            <TableCell
                                                style={{
                                                    color: "black",
                                                    fontWeight: "700",
                                                    fontFamily: "Roboto",
                                                }}
                                                key={head}
                                            >
                                                {head}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {filteredCoins
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map(({ id, name, current_price, price_change_24h, market_cap }) =>
                                        (
                                            <TableRow hover role="checkbox" key={id}>
                                                <TableCell>{name}</TableCell>
                                                <TableCell>{`${symbol} ${current_price}`}</TableCell>
                                                <TableCell>{`${price_change_24h}%`}</TableCell>
                                                <TableCell>{`${symbol} ${millify(market_cap)}`}</TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        )
                    }
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={filteredCoins.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Container>
        </ThemeProvider>
    )
}

export default CoinsTable