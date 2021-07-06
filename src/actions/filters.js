


// SET_TEXT_FILTER action function ( FOR FILTERS REDUCER ONLY)

export const setText = (text = '') => ({
    type:'SET_TEXT_FILTER',
    text
})

// SORT_BY_AMOUNT action generator function ( FOR FILTERS REDUCER ONLY)

export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
})

// SORT_BY_DATE action generator function ( FOR FILTERS REDUCER ONLY)

export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
})

// SET_START_DATE action generator function ( FOR FILTERS REDUCER ONLY)

export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

// SET_END_DATE action generator function ( FOR FILTERS REDUCER ONLY)

export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})