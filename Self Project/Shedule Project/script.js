const myForm = document.querySelector('form')
console.log(myForm)


myForm.addEventListener('submit',saveForm)

     let arr = [];

    function saveForm(event){
        event.preventDefault()

        let One = document.getElementById("one").value

        let Two = document.getElementById('two').value

        let Three = document.getElementById('three').value

        let Four = document.getElementById('four').value

        let Five = document.getElementById('five').value

        let Six = document.getElementById('six').value
        
        let Seven = document.getElementById('seven').value

        let Eight = document.getElementById('eight').value

        let Nine = document.getElementById('nine').value

        let Ten = document.getElementById('ten').value

        let Eleven = document.getElementById('eleven').value

        let Twelf = document.getElementById('twelf').value

        let Thirteen = document.getElementById('thirteen').value

        let Fourteen = document.getElementById('fourteen').value

        let object={
            DOne : One,
            DTwo : Two,
            DThree : Three,
            DFour : Four,
            DFive : Five,
            DSix : Six,
            DSeven : Seven,
            DEight : Eight,
            DNine : Nine,
            DTen : Ten,
            DEleven : Eleven,
            DTwelf : Twelf,
            DThirteen : Thirteen,
            DFourteen : Fourteen
        }
        console.log(object)

        arr.push(object)
            console.log(arr)

            display(arr);
    }

    function display(arr){
        document.querySelector("tbody").innerHTML ="";

        arr.forEach(function(data){

            let tr = document.createElement("tr")

            let one = document.createElement("td")
            one.innerText =data.DOne;

            
            let two = document.createElement("td")
            two.innerText =data.DTwo;

            
            let three = document.createElement("td")
            three.innerText =data.DThree;
 0
            
            let four = document.createElement("td")
            four.innerText =data.DFour;
            
            let five = document.createElement("td")
            five.innerText =data.DFive;
            
            let six = document.createElement("td")
            six.innerText =data.DSix;

            let seven = document.createElement("td")
            seven.innerText =data.DSeven;

            let eight = document.createElement("td")
            eight.innerText =data.DEight;

            let nine = document.createElement("td")
            nine.innerText =data.DNine;

            let ten = document.createElement("td")
            ten.innerText =data.DTen;

            let eleven = document.createElement("td")
            eleven.innerText =data.DEleven;
            
            let twelf = document.createElement("td")
            twelf.innerText =data.DTwelf;

            let thirteen = document.createElement("td")
            thirteen.innerText =data.DThirteen;

            let fourteen = document.createElement("td")
            fourteen.innerText =data.DFourteen;
            
            tr.append(one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelf,thirteen,fourteen)
            document.querySelector("tbody").append(tr)
            
        });
    }