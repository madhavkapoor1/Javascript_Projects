const maxProfit = (prices) => {
    let profit = 0;
    let left = 0;
    let right = 1;
    while(right < prices.length){
        if(prices[left] < prices[right]){
            let difference = prices[right] - prices[left];
            profit = Math.max(profit, difference);
            right = right + 1
        }
        
        else{
            left = right;
            right = left + 1;
        }
    }
        return profit;
};
