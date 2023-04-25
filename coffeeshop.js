const readline = require('readline');  
var clc = require("cli-color");
const fs = require("fs")

const { stdin: input, stdout: output } = require('process'); 

const rl = readline.createInterface({ input, output }); 

let menu = [
    { itemeName: "Classic Coffee", itemPrice: 50 },
    { itemeName: "Caramel Latte", itemPrice: 220 },
    { itemeName: "Espresso", itemPrice: 250 },
    { itemeName: "Cold Coffee", itemPrice: 300 },
    
]


let cart = []

const menuCard = ()=> {


    console.log(clc.bgRed("Welcome to Party Hard Cafe"))

    console.table(menu)
   

}

menuCard()

const inputFromUser = ()=> {

    rl.question(`${cart}`.length>0?"would you like to add more if yes please select the item number if No you can select X to checkout \n? ":"Please select your drink by entering the item Number \n else you can select X to check out \n", (selection)=> {
        if(selection == "x" || selection == "X") {
            if(cart.length > 0) {
                let total = 0
                cart.forEach((ele)=> {

                    total = Number(total) + ele.itemPrice
                })

                let items = cart.map((ele)=> {
                    return ele.itemeName
                })

                console.log(`Your ${items} is ready, enjoy your drink`)

                console.log(clc.green("Bill"))

                console.table(cart)

                console.log(clc.black.bgWhite(`Your Total Bill Amount is ${total}`))

                function feedback() { 

                rl.question(clc.green("Your feedback is valuable for us, please rate your experience from 1 to 5\n"),(experience)=> {
                    if(parseInt(experience)== experience && experience<=5) {
                        console.log("Thank for your valuable feedback, have a great day")
                        rl.close();
 
                    }

                    else {
                        feedback()
                    }


                })

            }
                


            feedback()


            }

            else {
                console.log(clc.red("No Items Selected"))
                rl.close();

            }
        }

        else {
            selection = Number(selection)

            if(selection > menu.length){
            console.log(clc.red("Please enter valid Item Number"))
        }
        

        else {

            cart.push(menu[selection])

            console.log(clc.green(`${menu[selection].itemeName} is added to cart`))

        }

        inputFromUser()
    }

    })


}




inputFromUser()

