

const selectExpensesTotal = (expenses) => {
            // here we use .map function to get the .amount from our object and return an array of all the .amounts 
        // then we immediatly use the .reduce function to add then up and return the sum
        return expenses.map(cost => cost.amount).reduce((prev, next) => prev + next,0)
}

// exporting this function so i can use it in my ExpenseSummary component which will be connected to my store.
export default selectExpensesTotal;