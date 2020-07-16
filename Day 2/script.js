        //String Methods
        // search() method
        let ex = 'Please locate where \'locate\' occurs!';
        let pos = ex.search('locate');
        console.log(pos);

        // slice() method
        let ex2 = "Apple, Banana, Kiwi";
        let re = ex2.slice(7, 13);
        let re1 = ex2.slice(-12, -6);
        let re2 = ex2.slice(7);
        console.log(re); 
        console.log(re1);
        console.log(re2);

        //substring() method
        let re3 = ex2.substring(7, 13);
        console.log(re3);

        //substr() method
        let re4 = ex2.substr(7, 6);
        console.log(re4);

        //replace() method
        let ex5 = "Please visit Microsoft and Microsoft!";
        let n = ex5.replace('Microsoft', 'Apple');
        console.log(n);
        let n1 = ex5.replace(/MICROSOFT/i, 'Apple');
        console.log(n1);
        let n2 = ex5.replace(/Microsoft/g, 'Sony');
        console.log(n2);

        //Array Methods
        let fruits = ["Banana", "Apple", "Watermelon", "Pineapple"];
        console.log(fruits.toString());
        //using join() method
        console.log(fruits.join("-"));

        //splice() method
        console.log(fruits.splice(2,2,"lemon", "Mango"));
        console.log(fruits.splice(0, 1));

        //concat() method
        let myGirls = ["Cecilie", "Lone"];
        let myBoys = ["Emil", "Tobias", "Linus"];
        let myChildren = myGirls.concat(myBoys);
        console.log(myChildren);

        //slice() method
        let fruit = ["Banana", "Apple", "Watermelon", "Pineapple"];
        let f1 = fruit.slice(3);
        let f2 = fruit.slice(1,3);
        console.log(f1);    //only with start argument.
        console.log(f2);    //with start and end argument.
