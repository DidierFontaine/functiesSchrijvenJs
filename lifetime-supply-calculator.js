function calculateSupply (age, amount) {
    const totalAmount = 365*age*amount
    console.log ( "You will need" + totalAmount + " to last you until the ripe old age of " + age +"");
}

calculateSupply(60, 5);
calculateSupply(70, 10);
calculateSupply(80, 20);
