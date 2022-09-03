import { CircularProgress, createTheme, styled, ThemeProvider } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { HistoricalChart } from '../config/api';
import { CryptoState } from '../CryptoContext';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const CoinChart = ({ id }) => {
    const [historicalData, setHistoricalData] = useState([]);
    const [period, setPeriod] = useState(1);

    const { currency, symbol } = CryptoState();

    const fetchChartData = async () => {
        const { data } = await axios.get(HistoricalChart(id, period, currency))

        setHistoricalData(data.prices);
    }

    useEffect(() => {
        fetchChartData();
    }, [currency, period])

    console.log(historicalData)

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            mode: "dark",
        }
    })

    const StyledContainer = styled('div')(({ theme }) => ({
        width: "75%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
        padding: 40
    }))

    return (
        <ThemeProvider theme={darkTheme}>
            <StyledContainer>
                {
                    !historicalData ? (
                        <CircularProgress
                            style={{ color: "gold" }}
                            size={250}
                            thickness={1}
                        />
                    ) : (
                        <>
                            {/* <Line ></Line> */}
                            <Line data={{
                                labels: historicalData.map((coin) => {
                                    console.log(coin)
                                    let date = new Date(coin[0]);
                                    let time = `${date.getHours()}:${date.getMinutes()}`;

                                    return period === 1 ? time : date.toLocaleDateString()
                                }),
                                datasets: [
                                    {
                                        data: historicalData.map((coin) => coin[1]),
                                        label: `Price ( Past ${period} Days ) in ${symbol}`,
                                        borderColor: '#EEBC1D',
                                    }
                                ]
                            }}
                                options={{
                                    elements: {
                                        point: {
                                            radius: 1
                                        }
                                    }
                                }}
                            />
                        </>
                    )
                }
            </StyledContainer>

        </ThemeProvider>
    )
}

export default CoinChart