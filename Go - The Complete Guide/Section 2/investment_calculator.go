package main

import (
	"fmt"
	"math"
)

func main() {
	const inflation = 2.5
	var investmentAmount float64
	expectedReturnRate := 5.5
	years := 10.0

	fmt.Scan(&investmentAmount)

	var futureValue = investmentAmount * math.Pow(1+expectedReturnRate/100, years)
	futureRealValue := futureValue / math.Pow(1+inflation/100, years)

	fmt.Println(futureRealValue)
}
