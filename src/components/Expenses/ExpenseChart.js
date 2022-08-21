import Chart from "../Chart/Chart"

const ExpenseChart = (props) =>{

   // console.log(props.expenses)
    const chartdataPonts = [
        {label : "Jan" , value :0},
        {label : "Feb" , value :0},
        {label : "Mar" , value :0},
        {label : "Apr" , value :0},
        {label : "May" , value :0},
        {label : "Jun" , value :0},
        {label : "Jul" , value :0},
        {label : "Aug" , value :0},
        {label : "Sep" , value :0},
        {label : "Oct" , value :0},
        {label : "Nov" , value :0},
        {label : "Dec" , value :0},
    ];

    props.expenses.forEach(element => {
    
        const expenseMonth = element.date.getMonth()
        chartdataPonts[expenseMonth].value += element.price;
    }); 


    return (
        <Chart dataPoints = {chartdataPonts}/>
    )
}

export default ExpenseChart