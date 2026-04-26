import React from 'react'
import './Dashboard.css'
import { Chart as chartjs } from 'chart.js/auto'
import { Bar,Doughnut,Line } from 'react-chartjs-2'
import sourceData from "./Data/sourceData.json"
import revenueData from "./Data/revenueData.json"
import Footer from '../Components/Footer'
function Dashboard() {
return (
    <>
    <div className='main'>
        <div className='datacard-revenueCard'>
            <Line
                data={{
                    labels: revenueData.map(Data => Data.label),
                    datasets: [
                        {
                            label: "Revenue",
                            data: revenueData.map(Data => Data.revenue),
                            backgroundColor: 'rgba(54, 162, 235, 0.5)',
                            borderColor: 'rgba(54, 162, 235, 1)',
                            borderWidth: 2,
                            tension: 0.4,
                            fill: false,
                        },
                        {
                            label: "Cost",
                            data: revenueData.map(Data => Data.cost),
                            backgroundColor: '#FF3030',
                            borderColor:  '#FF3030',
                            borderWidth: 2,
                            tension: 0.4,
                            fill: false,
                        },
                    ]
                }}
                options={{
                    plugins: {
                        legend: {
                            labels: {
                                color: 'Lawngreen'
                            }
                        },
                        title: {
                            display: true,
                            text: 'Monthly Revenue & Cost',
                            color: 'Lawngreen',
                            font: {
                                size: 18,
                                
                            }
                        },
                        tooltip: {
                            enabled: true
                        }
                    },
                    scales: {
                        x: {
                            ticks: {
                                color: 'Lawngreen'
                            }
                        },
                        y: {
                            ticks: {
                                color: 'Lawngreen'
                            }
                        }
                    }
                }}
                plugins={[
                    {
                        id: 'customLinePlugin',
                        afterDraw: (chart) => {
                            // Custom plugin logic here if needed
                        }
                    }
                ]}
            />
        </div>
        <div className='datacard-customerCard'>
         <Bar
                data={{
                    labels: sourceData.map(Data => Data.label),
                    datasets: [
                        {
                            label: "Count",
                            data: sourceData.map(Data => Data.value),
                            backgroundColor: [
                                '#FF3030',
                                'rgba(54, 162, 235, 0.5)',
                                'rgba(200, 144, 2, 0.5)',
                            ],
                            borderRadius: 5,
                        },
                    ]
                }}
                options={{
                    plugins: {
                        legend: {
                            labels: {
                                color: 'Lawngreen'
                            }
                        },
                        title: {
                            display: true,
                            text: 'Customer Source Count',
                            color: 'Lawngreen',
                            font: {
                                size: 18
                            }
                        },
                        tooltip: {
                            enabled: true
                        }
                    },
                    scales: {
                        x: {
                            ticks: {
                                color: 'Lawngreen'
                            }
                        },
                        y: {
                            ticks: {
                                color: 'Lawngreen'
                            }
                        }
                    }
                }}
                plugins={[
                    {
                        id: 'customBarPlugin',
                        afterDraw: (chart) => {
                            // Custom plugin logic here if needed
                        }
                    }
                ]}
            />
        </div>
        <div className='datacard-categoryCard'>
            <Doughnut
                data={{
                    labels: sourceData.map(Data => Data.label),
                    datasets: [
                        {
                            label: "Count",
                            data: sourceData.map(Data => Data.value),
                            backgroundColor: [
                                 '#FF3030',
                                'rgba(54, 162, 235, 0.5)',
                                'rgba(200, 144, 2, 0.5)',
                            ],
                            borderRadius: 5,
                        },
                    ]
                }}
                options={{
                    plugins: {
                        legend: {
                            labels: {
                                color: 'Lawngreen'
                            }
                        },
                        title: {
                            display: true,
                            text: 'Category Distribution',
                            color: 'Lawngreen',
                            font: {
                                size: 18
                            }
                        },
                        tooltip: {
                            enabled: true
                        }
                    }
                }}
                plugins={[
                    {
                        id: 'customDoughnutPlugin',
                        afterDraw: (chart) => {
                            // Custom plugin logic here if needed
                        }
                    }
                ]}
            />
        </div> 
    </div>
    <Footer />
    </>
)
}

export default Dashboard
