class restaurantManager {
    //part 1
    //array of objects
    restaurantList = [
        {
            id:1,
            restaurantname:"KFC",
            address:"Anand Vihar",
            city:"Delhi",
        },
        {
            id: 2,
            restaurantname: "Dominos",
            address: "Savita Vihar",
            city: "Delhi",
          },
          {
            id: 3,
            restaurantname: "Burger King",
            address: "Civil Lines",
            city: "Pune",
          },
          {
            id: 4,
            restaurantname: "Subway",
            address: "Cantonment",
            city: "Mumbai",
          },
    ];

    printAllRestaurantNames=()=>{
        return this.restaurantList.map((data)=>{
            return data.restaurantname;
        });
    };

    filterRestaurantByCity=(cityName)=>{
        return this.restaurantList.filter((data)=>{
            return data.city==cityName;
        });
    };
}

    let restObj = new restaurantManager();

    console.log(restObj);
    console.log(restObj.printAllRestaurantNames());

    console.log(restObj.filterRestaurantByCity("Mumbai"));
    console.log(restObj.filterRestaurantByCity("Delhi"));
    console.log(restObj.filterRestaurantByCity("Delhi")[0]);

    var orderData = {
        "Below 500": 20,
        "500-1000": 29,
        "1000-1500": 30,
        "1500-2000": 44,
        "Above 2000": 76,
      };

      let out=0;

      //2(a)the total number of orders placed for the restaurant
      for(key in orderData){
        out+=orderData[key];
      }
      console.log(out);
      
      //2(b)the number of order proportion options
      let proportions=Object.keys(orderData).length;
      console.log("The number of order proportions is" + proportions);
      
      //2(c)the percentage of each proportion 
      function getPercent(orderData){
        let total=0;
        for(key in orderData){
                total+=orderData[key];
        }
            console.log(total);
            let output=[];
            let count=0;
            for(key in orderData){
                let percentValue=((orderData[key]/total)*100).toFixed(2);
                count+=1;
                let myObj={};
                myObj.id=count;
                myObj.order=key;
                myObj.order_Percent=`${percentValue}`;
                myObj.restaurant="Punjabi Tadka";
                output.push(myObj);
            }
            return output;
      }
        console.log(getPercent(orderData));
      